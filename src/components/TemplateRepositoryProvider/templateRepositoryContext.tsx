import { TemplateRepository } from "@pawel-kuznik/force-organizer";
import { createContext } from "react";

export interface TemplateRepositoryContext {
    value: TemplateRepository;
}

export const TemplateRepositoryContext = createContext<TemplateRepositoryContext>({ value: new TemplateRepository() });