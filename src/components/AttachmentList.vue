<template>
  <div class="attachment-list-wrapper">
    <div class="attachment-list-header">
      <div class="attachment-list-column">
        <span :class="{'underlined': sortProperty === 'type'}">Type:</span>
        <button
          class="button-sort"
          @click="sortBy('type')"
        >
          <i class="icon-arrows-up-down"/>
        </button>
      </div>
      <div class="attachment-list-column">Comment:</div>
      <div class="attachment-list-column">
        <span :class="{'underlined': sortProperty === 'date'}">Date:</span>
        <button
          class="button-sort"
          @click="sortBy('date')"
        >
          <i class="icon-arrows-up-down"/>
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
          href="javascript:void"
        >
          <div class="attachment-list-column">{{ attachment.type }}</div>
          <div class="attachment-list-column">{{ attachment.comment }}</div>
          <div class="attachment-list-column">{{ attachment.date | moment("D-M-YY") }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AttachmentList",
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
      sortAscending: true
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
  margin-left 9px

.icon-arrows-up-down
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

.highlighted::after
  selection-border()
  content ""
  position absolute
  top 0
  right 0
  bottom 0
  left 0
</style>
