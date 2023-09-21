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
      todos: {
        Row: {
          created_at: string
          id: string
          is_complete: boolean | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_complete?: boolean | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_complete?: boolean | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "todos_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
