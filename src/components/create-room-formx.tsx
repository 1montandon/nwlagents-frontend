import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v4';
import { UseCreateRoom } from '@/http/use-create-room';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const createRoomSchema = z.object({
  name: z.string().min(3, { message: 'Inclua no minimo 3 caracteres ' }),
  description: z.string(),
});

type CreateRoomFormData = z.infer<typeof createRoomSchema>;

export function CreateRoomForm() {
  const { mutateAsync: createRoom } = UseCreateRoom();
  const createRoomForm = useForm<CreateRoomFormData>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      description: '',
      name: '',
    },
  });

  async function handleCreateRoom({ name, description }: CreateRoomFormData) {
    await createRoom({ name, description });
    createRoomForm.reset();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle> Criar Sala</CardTitle>
        <CardDescription>
          Crie uma nova sala para comecar a fazer perguntas e receber resposta
          da I.A.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...createRoomForm}>
          <form
            className="flex flex-col gap-4"
            onSubmit={createRoomForm.handleSubmit(handleCreateRoom)}
          >
            <FormField
              control={createRoomForm.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Nome da Sala</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Digite o nome da sala..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={createRoomForm.control}
              name="description"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Descricao</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button className="w-full" type="submit">
              Criar Sala
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
