<template>
  <StepperVertical v-if="$vuetify.breakpoint.mdAndUp" />
  <StepperHorizontal v-else />
</template>
