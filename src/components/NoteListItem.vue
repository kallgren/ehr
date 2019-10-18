<template>
  <li
    :class="['note-item', 'type--' + note.type, {'starred': note.is_starred, 'highlighted': isHighlighted}]"
    @mouseover="highlightNote(note)"
  >
    <div class="note-item-header">
      <span class="note-date">
        {{ note.date | moment("D MMM Y") }}
      </span>
      <i :class="['type-icon', typeIconClass]"/>
      #{{ note.id_for_patient }}
      <b>{{ note.diagnosis_description }}</b>
      <div class="action-buttons">
        <button class="action-button button-send">
          <i class="icon-paper-plane"/>
        </button>
        <button
          class="action-button button-star"
          @click="toggleStarNote(note)"
        >
          <i :class="[note.is_starred ? 'icon-star-filled' : 'icon-star-empty']"/>
        </button>
      </div>
    </div>
    <div class="note-item-content">
      <div class="content-left">
        <div class="content-section">
          <b>Chief complaint:</b>
          <br>
          {{ note.chief_complaint || "-" }}
        </div>
        <div class="content-section">
          <b>History of present illness:</b>
          <br>
          {{ note.history_of_present_illness || "-" }}
        </div>
        <div class="content-section">
          <b>Physical examination:</b>
          <br>
          {{ note.physical_examination || "-" }}
        </div>
      </div>
      <div class="content-right">
        <div class="content-section">
          <b>Assessment:</b>
          <br>
          {{ note.assessment || "-" }}
        </div>
        <div class="content-section">
          <b>Plan:</b>
          <br>
          {{ note.plan || "-" }}
        </div>
      </div>
      <div
        v-if="note.attachments.length"
        class="content-bottom"
      >
        <i class="icon-paperclip"/>
        <div class="attachments-info">
          Attachments ({{ note.attachments.length }}):
          <br>
          <span
            v-for="(attachment, index) in note.attachments"
            :key="attachment.id"
          >
            <b>{{ attachment.type }}</b>
            {{ attachment.date | moment("D-M-YY") }}<span v-if="index < note.attachments.length - 1">, </span>
          </span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "NoteListItem",
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  computed: {
    isHighlighted() {
      const highlightedNote = this.$store.state.highlightedNote;

      return highlightedNote && highlightedNote.id === this.note.id;
    },
    typeIconClass() {
      switch (this.note.type) {
        case "surgery":
          return this.note.is_starred
            ? "icon-surgeries-one-white"
            : "icon-surgeries-one";
        case "epicrisis":
          return this.note.is_starred
            ? "icon-charts-one-white"
            : "icon-charts-one";
        default:
          return "";
      }
    }
  },
  methods: {
    ...mapActions(["toggleStarNote"]),
    ...mapMutations(["highlightNote"])
  }
};
</script>

<style scoped lang="stylus">
.note-item
  position relative
  margin-bottom 15px
  background white
  border 1px solid $color-grey-darker

  &:last-child
    margin-bottom 0

.highlighted::after
  selection-border()
  content ""
  position absolute
  top -1px
  right -1px
  bottom -1px
  left -1px
  pointer-events none

.note-item-header
  position relative
  padding 6px 75px 5px 9px
  background $color-red-light
  border-bottom 1px solid $color-grey-darker

.starred .note-item-header
  color white
  background $color-red-medium

.note-date
  margin-right 35px

.type-icon
  position absolute
  margin-top -5px
  margin-left -26px

.action-buttons
  position absolute
  top 2px
  right 5px

.action-button
  width 25px
  height 25px
  margin-left 10px
  padding 2px
  text-align center
  background white
  border-radius 3px

.note-item-content
  display flex
  flex-wrap wrap
  padding 22px 24px 13px

.content-left
.content-right
.content-bottom
  flex 1 100%

.content-left
.content-right
  flex 1 0 0

.content-left
  margin-right 20px

.content-right
  margin-left 20px

.content-section
  margin-bottom 18px

  &:last-child
    margin-bottom 5px

.content-bottom
  margin-top 7px

.icon-paperclip
  margin-right 7px
  margin-left 3px

.attachments-info
  display inline-block
</style>
