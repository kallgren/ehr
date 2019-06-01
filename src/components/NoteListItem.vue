<template>
  <li
    :class="['note-item', {'starred': note.is_starred}]"
  >
    <div class="note-item-header">
      <span class="note-date">
        {{ note.date | moment("D MMM Y") }}
      </span>
      #{{ note.id_for_patient }}
      <b>{{ note.diagnosis_description }}</b>
      <div class="action-buttons">
        <button class="action-button button-send">
          <i class="icon-paper-plane"/>
        </button>
        <button
          class="action-button button-star"
          @click="toggleStarNoteById(note)"
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
            <b>{{ attachment.name }}</b>
            {{ attachment.date | moment("D-M-YY") }}<span v-if="index < note.attachments.length - 1">, </span>
          </span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NoteListItem",
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: mapActions(["toggleStarNoteById"])
};
</script>

<style scoped lang="stylus">
.note-item
  margin-bottom 15px
  background white
  border 1px solid $color-grey-darker

  &:last-child
    margin-bottom 0

.note-item-header
  position relative
  padding 6px 75px 5px 9px
  background $color-red-light
  border-bottom 1px solid $color-grey-darker

.starred .note-item-header
  color white
  background $color-red-medium

.note-date
  margin-right 14px

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
