export type FormType = {
    id: string
    status: "published" | "editing"
    totalVisits: number
    totalSubmissions: number
    totalBounces: number
    name: string
    createdAt: string
    description: string
    elementsList: any[]
    submissionsList: any[]
}