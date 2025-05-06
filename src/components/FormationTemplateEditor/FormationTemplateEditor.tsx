import { InlineForm, Input } from "@pawel-kuznik/react-faceplate";
import { FormationTemplate } from "@pawel-kuznik/force-organizer";
import { usePotentialEntry } from "@pawel-kuznik/react-datasack";
import { EntryPotential } from "@pawel-kuznik/datasack";
import { useTemplateRepository } from "../TemplateRepositoryProvider";


export interface FormationTemplateEditorProps {
    templatePotential: EntryPotential<FormationTemplate>;
}

/**
 *  This is a component that allows defining a formation template.
 */
export function FormationTemplateEditor({ templatePotential }: FormationTemplateEditorProps) {

    const repository = useTemplateRepository();
    const template = usePotentialEntry(templatePotential);

    const handleName = (data: any) => {
        template.rename(data.name);
        repository.formations.store(template);
    };

    return (
        <div>
            <h2>Formation</h2>
            <InlineForm onChange={handleName}>
                <Input name="name"/>
            </InlineForm>
        </div>
    )
};