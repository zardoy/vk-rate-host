export interface SummaryHostInfo {
    host_id: number,
    host_name: string,
    host_site: string,
    host_rating: number
}

export interface DetailedHostInfo {
    host_description: string,
    ratings: {
        support: number,
        network: number,
        ram: number,
        cpu: number,
        billing: number
    }
}

export interface MethodError {
    error: {
        code: number,
        message: string,
        description: string
    }
}

interface CommentsGeneralData {
    id: number,
    time: number,
    user_id: number,
    reputation: number,
    text: string
}

export type CommentData = (CommentsGeneralData & {
    rating: number,
    answers: (CommentsGeneralData & {
        is_hoster: boolean
    })[]
});

export interface ServerRequestMethods {
    "app.init": {
        postParams: {},
        responseData: {
            user_type: "user" | "host_member" | "host_owner"
        }
    },
    "app.GetRatingList": {
        postParams: {},
        responseData: SummaryHostInfo[]
    },
    "host.GetInfo": {
        postParams: {
            host_id: number
        },
        responseData: DetailedHostInfo
    },
    "host.GetComments": {
        postParams: {
            host_id: number
        },
        responseData: CommentData[]
    },
    "host.AddOrEditRating": {
        postParams: {
            host_id: number,
            rating: number,
            rate_support: number,
            rate_network: number,
            rate_ram: number,
            rate_cpu: number,
            reate_billing: number,
            content?: string
        }
    },
    "host.AddAnswer": {
        postParams: {
            rate_id: number,
            content: string
        }
    },
    "host.EditAnswer": {
        postParams: {
            comment_id: number,
            content: string
        }
    },
    "host.SendUserReaction": {
        postParams: {
            content_id: number,
            reaction: "positive" | "negative"
        }
    },
    "host.DeleteContent": {
        postParams: {
            host_id: number,
        } | {
            comment_id: number
        }
    },
    "hostMembers.Add": {
        postParams: {
            user_id: number
        }
    },
    "hostMembers.Delete": {
        postParams: {
            user_id: number
        }
    }
}