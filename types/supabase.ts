export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      marketnews: {
        Row: {
          content: string | null
          created_at: string
          id: string
          label: "BTC" | "ETH" | "XRP" | null
          score: number | null
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          label?: string | null
          score?: number | null
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          label?: string | null
          score?: number | null
          title?: string | null
        }
        Relationships: []
      }
      marketnews_free: {
        Row: {
          content: string | null
          created_at: string
          id: string
          label: "BTC" | "ETH" | "XRP" | null
          score: number | null
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          label?: string | null
          score?: number | null
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          label?: string | null
          score?: number | null
          title?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
