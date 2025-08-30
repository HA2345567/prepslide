import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Project, User } from "@/generated/prisma";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";




const AppSidebar = ({ recentProjects, user, ...props }: { recentProjects: Project[] } & { user: User } & React.ComponentProps<typeof Sidebar>) => {
    return (
        <Sidebar
            collapsible="icon"
            className="max-w-[212px] bg-background-90"
            {...props}>
            <SidebarHeader className="pt-6 px-3 pb-0">
                <SidebarMenuButton size={'lg'} className="data-[state=open]: text-sidebar-accent-foreground">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-foreground">
                        <Avatar>
                            <AvatarImage
                                src={'logo.png'}
                                alt={'user-logo'}
                            />
                        <AvatarFallback className="rounded-lg"> PS</AvatarFallback>
                    </Avatar>
                    </div>
                    <span  className="truncate text-primary text-3xl font-semibold ">PrepSlide</span>
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
                <SidebarContent />
            </SidebarContent>
            <SidebarFooter />

        </Sidebar>
    )
}
export default AppSidebar;