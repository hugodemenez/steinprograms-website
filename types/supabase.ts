export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      coindesk: {
        Row: {
          content: string | null
          created_at: string | null
          creator: string | null
          date: string | null
          description: string | null
          id: number
          link: string | null
          picture: string | null
          section: string | null
          summary: string | null
          symbol: string | null
          title: string
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          creator?: string | null
          date?: string | null
          description?: string | null
          id?: number
          link?: string | null
          picture?: string | null
          section?: string | null
          summary?: string | null
          symbol?: string | null
          title: string
        }
        Update: {
          content?: string | null
          created_at?: string | null
          creator?: string | null
          date?: string | null
          description?: string | null
          id?: number
          link?: string | null
          picture?: string | null
          section?: string | null
          summary?: string | null
          symbol?: string | null
          title?: string
        }
        Relationships: []
      }
      marketnews: {
        Row: {
          content: string | null
          created_at: string
          id: string
          label: string | null
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
          label: string | null
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
      users: {
        Row: {
          api_key: string
          user_id: string | null
        }
        Insert: {
          api_key: string
          user_id?: string | null
        }
        Update: {
          api_key?: string
          user_id?: string | null
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
