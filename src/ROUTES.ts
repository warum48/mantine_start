import { Appointment } from "./_routes/Appointment/Appointment";

/**
 * Все пути надо объявлять здесь и обращаться к ним через RoutesTypes.<path> чтобы был единый источник правды и не было опечаток 
 */
export enum RoutesTypes { 
    Home = "/",
    Reports = "/reports",
    Auth = "/auth",
    ChangePassword = "/changepassword",
    Calendar = "/calendar",
    Orders = "/orders",
    Documents = "/documents",
    Empty = "/empty",
    //---export:---
    Execution = "/execution",
    Pictures = "/pictures",
    Reasons = "/reasons",
    //---debug---
    Pictures_debug = "/pictures_debug",
    Debug_GQL = "/debug_gql",
    Debug_LazyGQL = "/debug_lazygql",
    Debug_LazySelect = "/debug_lazyselect",
    Debug_LeafletPure = "/debug_leafletpure",
    Debug_SharedComponents = "/debug_shared",

    Appointment = "/appointment"
  }
 