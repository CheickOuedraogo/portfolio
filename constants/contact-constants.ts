import {
  type ContactField,
  type ContactFormData,
} from "@/types/contact-types";

export const INITIAL_FORM_STATE: ContactFormData = {
  name: "",
  email: "",
  budget: "",
  message: "",
};

export const REQUIRED_FIELDS: ContactField[] = ["name", "email", "message"];

export const BUDGET_OPTIONS = [
  { value: "< 1 000 €", label: "< 1 000 €" },
  { value: "1 000 € - 5 000 €", label: "1 000 € - 5 000 €" },
  { value: "5 000 € - 15 000 €", label: "5 000 € - 15 000 €" },
  { value: "15 000 €+", label: "15 000 €+" },
  { value: "hourly", label: "Taux horaire" },
] as const;

export const ALERT_DURATION = 5000;

export const CONTACT_SUCCESS_MESSAGE =
  "Message envoyé avec succès. Je vous répondrai sous 24 heures.";
export const CONTACT_ERROR_MESSAGE =
  "Une erreur est survenue, veuillez réessayer.";
