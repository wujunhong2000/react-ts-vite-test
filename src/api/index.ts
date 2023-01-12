import { MenuList } from "@/models/menu.interface";
import { LoginParams, LoginResult } from "@/models/login";
import { SingnInParams, SingnInResult } from "@/models/signIn";
import { CurrentUserResult } from "@/models/user";
import { RecordResult } from "@/models/record";
import { useBatch, useCreate, useGetList, useGetOne, useUpdate } from "./request";

const projectResource = '/projects';

export const useLogin = () => {
    return useCreate<LoginParams, LoginResult>("/login");
}

export const useGetCurrentUser = () => {
    return useGetOne<CurrentUserResult>(
        "CurrentUser",
        "/current/user"
      );
}

export const useGetCurrentMenus = () => {
    return useGetList<MenuList>("CurrentMenuList",
        "/current/menu"
    );

}
export const useGetProjects = (pagination: any, filters: any) => {
    return useGetList<API.ProjectPagination>(
        "Projects",
        projectResource,
        pagination,
        filters
    );
}
export const useAddProject = () => {
    return useCreate<API.Project, API.Project>(projectResource);
}

export const useUpdateProject = () => {
    return useUpdate<API.Project>(projectResource);
}

export const useBatchDeleteProject = () => {
    return useBatch(projectResource + ':batchDelete');
}

export const useSignIn = () => {
    return useCreate<SingnInParams, SingnInResult>("/signIn");
}
export const useGetRecord = () => {
    return useGetOne<RecordResult>(
        "Record",
        "/record",
    );
}

