import { TemplateRepository } from "@pawel-kuznik/force-organizer";
import { PropsWithChildren } from "react";
import { TemplateRepositoryContext } from "./templateRepositoryContext";

export interface TemplateRespositoryProviderProps extends PropsWithChildren {
    repository: TemplateRepository; 
}

export function TemplateRespositoryProvider({ repository, children }: TemplateRespositoryProviderProps) {

    return (
        <TemplateRepositoryContext.Provider value={{ value: repository }}>
            {children}
        </TemplateRepositoryContext.Provider>
    );
};