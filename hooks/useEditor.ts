import { HtmlHistory } from "@/types";
import { useState } from "react";

export const useEditor = (defaultHtml: string) => {
    /**
     * estado pra gerenciar o conteúdo html do editor.
     * 
     * isso será o conteúdo principal que os usuários editarão.
     */
    const [html, setHtml] = useState(defaultHtml);

    /**
     * estado para gerenciar o histórico de edições de html.
     * 
     * isso armazenará versões anteriores do conteúdo html junto com metadados.
     */
    const [htmlHistory, setHtmlHistory] = useState<HtmlHistory[]>([]);

    /**
     * estado para gerenciar os prompts usados para gerar conteúdo html.
     * 
     * isso pode ser usado para rastrear quais prompts foram usados no editor.
     */
    const [prompts, setPrompts] = useState<string[]>([]);

    return {
        html,
        setHtml,
        htmlHistory,
        setHtmlHistory,
        prompts,
        setPrompts
    };
};