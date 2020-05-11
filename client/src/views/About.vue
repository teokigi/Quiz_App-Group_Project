<template>
    <div id="">
        <page-header title='About' />
    </div>
</template>
<script>
import PageHeader from '@/components/PageHeader';

export default {
    props: ['message'],
  components: {
    'page-header': PageHeader
  }
}
</script>
<style scoped>
</style>
