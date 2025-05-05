import { useState } from "react";
import { TemplateRespositoryProvider } from "../TemplateRepositoryProvider"
import { TemplateRepository } from "@pawel-kuznik/force-organizer";
import { FormationTemplatesList } from "./FormationTemplatesList";

export function ForceEditor() {

    const [ templateRepository ] = useState(() => new TemplateRepository());

    return (
        <TemplateRespositoryProvider repository={templateRepository}>
            <div>
                <h2>Force Editor</h2>
                <FormationTemplatesList/>
            </div>
        </TemplateRespositoryProvider>
    );
};