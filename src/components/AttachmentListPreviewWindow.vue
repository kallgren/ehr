<template>
  <div class="preview-window">
    <img
      v-if="attachment.image_name"
      :src="require('@/assets/images/' + attachment.image_name)"
      class="preview-image"
    >
    <div class="preview-description">
      <b>{{ attachment.type }}</b><br>
      {{ attachment.comment }}<br v-if="attachment.comment">
      {{ attachment.date | moment("D-M-YY") }}
    </div>
    <div
      v-if="attachment.text && attachment.text.length"
      class="preview-content"
    >
      <p
        v-for="(paragraph, index) in attachment.text"
        :key="index"
      >
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AttachmentListPreviewWindow",
  props: {
    attachment: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="stylus">
.preview-window
  position fixed
  top 20px
  left 20px
  max-width 647px // Sidebar + problem list - (top + left)
  padding 25px
  background white
  box-sizing border-box
  box-shadow 0 2px 10px rgba(0,0,0,0.3)
  z-index $z-attachment-preview

.preview-image
  display block
  max-width 100%
  margin 0 auto 13px

.preview-description
  font-size $font-size--base
</style>
