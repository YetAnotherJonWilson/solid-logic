import { NamedNode } from "rdflib";
import { AuthnLogic } from "../types";

/**
 * Fallback, if no auth client has been provided to solid-logic
 */
export class NoAuthnLogic implements AuthnLogic {
  constructor() {
    console.warn(
      "no auth client passed to solid-logic, logic that relies on auth is not available"
    );
  }

  currentUser(): null {
    return null;
  }

  async checkUser<T> (): Promise<NamedNode | T | null> {
    return null
  }

  saveUser (): NamedNode | null {
    return null
  }
}
