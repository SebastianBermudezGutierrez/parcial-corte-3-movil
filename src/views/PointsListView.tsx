<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Registro De Puntos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-input
        label="id"
        label-placement="floating"
        placeholder="Identificador único"
      />
      <ion-input
        label="title"
        label-placement="floating"
        placeholder="Título del punto"
      />
      <ion-input
        label="description"
        label-placement="floating"
        placeholder="Descripción detallada"
      />
      <ion-input
        label="date"
        label-placement="floating"
        placeholder="Fecha de registro"
      />
      <ion-input
        label="status"
        label-placement="floating"
        type="password"
        placeholder="Estado del punto (activo/inactivo)"
      />
      <ion-button expand="block" router-link="/tabs/training" color="dark">
        Entrar
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton
} from '@ionic/vue'
</script>

<style scoped>
ion-content {
  background-color: black;
  color: white;
}

ion-title {
  text-align: center;
  color: white;
}
</style>
