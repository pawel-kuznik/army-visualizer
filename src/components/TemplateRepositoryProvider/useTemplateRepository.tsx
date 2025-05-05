import { useContext } from "react";
import { TemplateRepositoryContext } from "./templateRepositoryContext";

export function useTemplateRepository() {

    const { value } = useContext(TemplateRepositoryContext);
    return value;
}
