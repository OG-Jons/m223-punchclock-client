<template>
  <div>
    <h1>{{ land }}</h1>
    <h2>{{ user }}</h2>
    <h3>{{ admin }}</h3>
    <button class="btn btn-primary" @click="printEntries">Yes</button>
  </div>
</template>

<script lang="ts" src="./Dashboard.ts"></script>
