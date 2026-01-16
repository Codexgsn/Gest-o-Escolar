
import { NewResourceForm } from "@/components/resources/new-resource-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// This is the main page component, which is a Server Component.
export default async function NewResourcePage() {
  // The 'tags' feature is temporarily disabled to allow the build to pass.
  // A migration is needed to add the 'tags' column to the database.
  const availableTags: string[] = [];

  return (
    <Card className="max-w-4xl mx-auto">
        <CardHeader>
            <CardTitle>Adicionar Novo Recurso</CardTitle>
            <CardDescription>
                Preencha o formulário para adicionar um novo recurso (sala, objeto, etc.) para reserva.
            </CardDescription>
        </CardHeader>
        <CardContent>
            {/* Pass an empty array for tags as a temporary measure */}
            <NewResourceForm availableTags={availableTags} />
        </CardContent>
    </Card>
  );
}
