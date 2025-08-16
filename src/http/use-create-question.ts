import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateQuestionRequest } from './types/create-question-request';
import type { CreateQuestionResponse } from './types/create-question-response';
import type { GetRoomQuestionsResponse } from './types/get-room-questions-response';

export function UseCreateQuestion(roomId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const result: CreateQuestionResponse = await response.json();

      return result;
    },

    onMutate({ question }) {
      const questions = queryClient.getQueryData<GetRoomQuestionsResponse>([
        'get-questions',
        roomId,
      ]);

      const questionsArray = questions ?? [];

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
      };

      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ['get-questions', roomId],
        [newQuestion, ...questionsArray]
      );
      return { newQuestion, questions };
    },

     onSuccess(_data, _variables, context){
        queryClient.setQueryData<GetRoomQuestionsResponse>(
          ['get-questions', roomId],
          questions => {
            if (!questions){
              return questions 
            }
            if(context.questions){
              return questions 
            }
            
          }
        );
     },

    onError(_error, _variables, context) {
      if (context?.questions) {
        queryClient.setQueryData<GetRoomQuestionsResponse>(
          ['get-questions', roomId],
          context.questions
        );
      }
    },
  });
}
