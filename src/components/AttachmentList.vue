<template>
  <div class="attachment-list-wrapper">
    <div class="attachment-list-header">
      <div class="attachment-list-column">
        <button
          class="button-sort"
          @click="sortBy('type')"
        >
          <span :class="{'underlined': sortProperty === 'type'}">Type:</span>
          <i :class="[typeSortIconClass]"/>
        </button>
      </div>
      <div class="attachment-list-column">Comment:</div>
      <div class="attachment-list-column">
        <button
          class="button-sort"
          @click="sortBy('date')"
        >
          <span :class="{'underlined': sortProperty === 'date'}">Date:</span>
          <i :class="[dateSortIconClass]"/>
        </button>
      </div>
    </div>
    <ul class="attachment-list">
      <li
        v-for="attachment in sortedAttachments"
        :key="attachment.id"
      >
        <a
          :class="['attachment-item', {'highlighted': isHighlighted(attachment)}]"
          href="javascript:void(0)"
          @mouseover="attachmentToPreview = attachment"
          @mouseleave="attachmentToPreview = null"
        >
          <div class="attachment-list-column">{{ attachment.type }}</div>
          <div class="attachment-list-column">{{ attachment.comment }}</div>
          <div class="attachment-list-column">{{ attachment.date | moment("D-M-YY") }}</div>
        </a>
      </li>
    </ul>
    <AttachmentListPreviewWindow
      v-if="attachmentToPreview"
      :attachment="attachmentToPreview"
    />
  </div>
</template>

<script>
import AttachmentListPreviewWindow from "@/components/AttachmentListPreviewWindow.vue";

export default {
  name: "AttachmentList",
  components: {
    AttachmentListPreviewWindow
  },
  props: {
    attachments: {
      type: Array,
      required: true,
      validator: prop => prop.every(e => typeof e === "object")
    }
  },
  data() {
    return {
      sortProperty: null,
      sortAscending: true,
      attachmentToPreview: null
    };
  },
  computed: {
    sortedAttachments() {
      if (!this.sortProperty) return this.attachments;

      const unSortedAttachments = [].concat(this.attachments);

      let sortFunction;

      if (this.sortAscending) {
        sortFunction = (a, b) =>
          a[this.sortProperty].localeCompare(b[this.sortProperty]);
      } else {
        sortFunction = (a, b) =>
          b[this.sortProperty].localeCompare(a[this.sortProperty]);
      }

      return unSortedAttachments.sort(sortFunction);
    },
    typeSortIconClass() {
      if (this.sortProperty === "type") {
        return this.sortAscending ? "icon-sort-down" : "icon-sort-up";
      }

      return "icon-sort";
    },
    dateSortIconClass() {
      if (this.sortProperty === "date") {
        return this.sortAscending ? "icon-sort-down" : "icon-sort-up";
      }

      return "icon-sort";
    }
  },
  methods: {
    sortBy(propertyName) {
      if (propertyName !== this.sortProperty) {
        this.sortAscending = propertyName !== "date";
        this.sortProperty = propertyName;
      } else {
        this.sortAscending = !this.sortAscending;
      }
    },
    isHighlighted(attachment) {
      const highlightedNote = this.$store.state.highlightedNote;

      return highlightedNote && highlightedNote.id === attachment.note_id;
    }
  }
};
</script>

<style scoped lang="stylus">
.attachment-list-wrapper
  display flex
  flex-direction column
  height 100%
  font-size $font-size--small

.attachment-list-header
.attachment-item
  display flex
  padding 0 11px

.attachment-list-column
  width 40%
  padding-right 5px
  box-sizing border-box

  &:first-child
    width 40%

  &:last-child
    width 20%

.attachment-list-header
  padding-top 2px
  padding-bottom 3px
  font-weight bold
  background $color-green-lighter
  border-bottom 1px solid $color-green-darkish

.button-sort
  font-size inherit
  font-weight bold
  background transparent

  i
    margin-left 9px
    vertical-align middle

.underlined
  text-decoration underline

.attachment-list
  flex-grow 1
  margin 0
  padding 0
  list-style-type none
  overflow-y auto

.attachment-item
  position relative
  padding-top 9px
  padding-bottom 10px
  color inherit
  text-decoration none
  background white
  border-bottom 1px solid $color-grey-dark

  &:hover
    background $color-grey-light

.highlighted::after
  selection-border()
  content ""
  position absolute
  top 0
  right 0
  bottom 0
  left 0
</style>
