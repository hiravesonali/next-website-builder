export interface Block {
  id: string;

  type: string;

  props: Record<string, unknown>;
}
