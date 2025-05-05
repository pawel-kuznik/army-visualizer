import { InlineForm, Input } from "@pawel-kuznik/react-faceplate";
import { FormationTemplate } from "@pawel-kuznik/force-organizer";
import { usePotentialEntry } from "@pawel-kuznik/react-datasack";
import { EntryPotential } from "@pawel-kuznik/datasack";


export interface FormationTemplateEditorProps {
    templatePotential: EntryPotential<FormationTemplate>;
}

/**
 *  This is a component that allows defining a formation template.
 */
export function FormationTemplateEditor({ templatePotential }: FormationTemplateEditorProps) {

    const template = usePotentialEntry(templatePotential)

    const handleName = (data: any) => {
        template.rename(data.name)
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