import { DatabaseAdapter } from "@/domain/model/database.adapter";
import { QuestionType } from "@/domain/model/question.dto";
import { QuizDTO } from "@/domain/model/quiz.dto";

export class NextApiAdapter implements DatabaseAdapter {
    private readonly apiUrl = "";

    async getAllQuizes(): Promise<QuizDTO[]> {
        const response = new Promise((resolve) => {
            console.log("!!! Loading");
            setTimeout(resolve, 3000);
        });

        await response;
        console.log("Response from the server");

        return [
            {
                id: "test-1",
                title: "Personality Quiz",
                description: "Find out what kind of learner you are.",
                questions: [
                    {
                        id: "q1",
                        title: "What do you enjoy the most?",
                        type: QuestionType.SingleSelect,
                        options: [
                            {
                                id: "a1",
                                title: "Reading books",
                                nextQuestion: "q2",
                            },
                            {
                                id: "a2",
                                title: "Watching videos",
                                nextQuestion: "q3",
                            },
                            {
                                id: "a3",
                                title: "Hands-on activities",
                                nextQuestion: "q4",
                            },
                        ],
                    },
                    {
                        id: "q2",
                        title: "What type of books do you prefer?",
                        type: QuestionType.SingleSelect,
                        options: [
                            {
                                id: "a4",
                                title: "Fiction",
                                nextQuestion: "q5",
                            },
                            {
                                id: "a5",
                                title: "Non-fiction",
                                nextQuestion: "q5",
                            },
                        ],
                    },
                    {
                        id: "q3",
                        title: "What type of videos do you enjoy?",
                        type: QuestionType.SingleSelect,
                        options: [
                            {
                                id: "a6",
                                title: "Documentaries",
                                nextQuestion: "q5",
                            },
                            {
                                id: "a7",
                                title: "Entertainment",
                                nextQuestion: "q5",
                            },
                        ],
                    },
                    {
                        id: "q4",
                        title: "What kind of hands-on activities do you prefer?",
                        type: QuestionType.SingleSelect,
                        options: [
                            {
                                id: "a8",
                                title: "Crafting",
                                nextQuestion: "q5",
                            },
                            {
                                id: "a9",
                                title: "Building",
                                nextQuestion: "q5",
                            },
                        ],
                    },
                    {
                        id: "q5",
                        title: "How do you prefer to learn? Previously you selected {{craft_preference}}",
                        type: QuestionType.SingleSelect,
                        options: [
                            {
                                id: "a10",
                                title: "By reading",
                                nextQuestion: null,
                            },
                            {
                                id: "a11",
                                title: "By watching videos",
                                nextQuestion: null,
                            },
                            {
                                id: "a12",
                                title: "By doing",
                                nextQuestion: null,
                            },
                        ],
                    },
                ],
            },
            {
                id: "test-2",
                title: "Second quiz",
                description: "Testing quizes",
                questions: [],
            },
        ];
    }

    async getQuizByID(id: string): Promise<QuizDTO> {
        const response = new Promise((resolve) => {
            console.log(`!!! Loading quiz with id: ${id}`);
            setTimeout(resolve, 1000);
        });

        await response;
        console.log("Response from the server");

        return {
            id: "test-1",
            title: "Personality Quiz",
            description: "Find out what kind of learner you are.",
            questions: [
                {
                    id: "q1",
                    title: "What do you enjoy the most?",
                    type: QuestionType.SingleSelect,
                    options: [
                        {
                            id: "a1",
                            title: "Reading books",
                            nextQuestion: "q2",
                        },
                        {
                            id: "a2",
                            title: "Watching videos",
                            nextQuestion: "q3",
                        },
                        {
                            id: "a3",
                            title: "Hands-on activities",
                            nextQuestion: "q4",
                        },
                    ],
                },
                {
                    id: "q2",
                    title: "What type of books do you prefer?",
                    type: QuestionType.SingleSelect,
                    options: [
                        {
                            id: "a4",
                            title: "Fiction",
                            nextQuestion: "q5",
                        },
                        {
                            id: "a5",
                            title: "Non-fiction",
                            nextQuestion: "q5",
                        },
                    ],
                },
                {
                    id: "q3",
                    title: "What type of videos do you enjoy?",
                    type: QuestionType.SingleSelect,
                    options: [
                        {
                            id: "a6",
                            title: "Documentaries",
                            nextQuestion: "q5",
                        },
                        {
                            id: "a7",
                            title: "Entertainment",
                            nextQuestion: "q5",
                        },
                    ],
                },
                {
                    id: "q4",
                    title: "What kind of hands-on activities do you prefer?",
                    type: QuestionType.SingleSelect,
                    options: [
                        {
                            id: "a8",
                            title: "Crafting",
                            nextQuestion: "q5",
                        },
                        {
                            id: "a9",
                            title: "Building",
                            nextQuestion: "q5",
                        },
                    ],
                },
                {
                    id: "q5",
                    title: "How do you prefer to learn? Previously you selected {{craft_preference}}",
                    type: QuestionType.SingleSelect,
                    options: [
                        {
                            id: "a10",
                            title: "By reading",
                            nextQuestion: null,
                        },
                        {
                            id: "a11",
                            title: "By watching videos",
                            nextQuestion: null,
                        },
                        {
                            id: "a12",
                            title: "By doing",
                            nextQuestion: null,
                        },
                    ],
                },
            ],
        };
    }
}