type SeniorityName = 'Experience' | 'Length' | 'Clearance level' | 'Quality' | 'R/P'

export interface CharapterSeniority {
    name: SeniorityName,
    star: number
}