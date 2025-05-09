import { create } from 'zustand';

type Page = {
    id: String;
    title: string;
    path: string;
};

interface UserPagesState {
    pages: Page[];
    addPage: (title: string) => void;
}

export const useUserPagesStore = create<UserPagesState>((set) => ({
    pages: [],
    addPage: (title) =>
        set((state) => {
            const id = Date.now().toString();
            const path = `/page/${id}`;
            return {
                pages: [...state.pages, { id, title, path }],
            };
        }),
}));
