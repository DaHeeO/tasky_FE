import { create } from 'zustand';

interface SideBarState {
    isOpen: boolean;
    userToggled: boolean; //사용자 ux 존중
    setOpen: (open: boolean) => void;
    setUserToggled: (toggled: boolean) => void;
    toggle: () => void;
}

export const useSideBarStore = create<SideBarState>((set) => ({
    isOpen: window.innerWidth >= 700,
    userToggled: false,
    setOpen: (open) => set({ isOpen: open }), //시스템 조작용 (예를 들어 700미만 setOpen(false))
    setUserToggled: (toggled) => set({ userToggled: toggled }),
    toggle: () =>
        set((state) => ({
            isOpen: !state.isOpen,
            userToggled: true, // 사용자가 수동으로 토글한 것임을 표시
        })),
}));
