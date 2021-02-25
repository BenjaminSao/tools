import { FirestoreViewModel } from "./firestore/firestore-view-model";
import { HomeViewModel } from "./home/home-view-model";

export const pages: Array<Function> = [
    HomeViewModel,
    FirestoreViewModel
];