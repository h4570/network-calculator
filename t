// POST: https://api.openai.com/v1/files
// Body: form-data [ purpose: 'assistants', file: @file ]
// Response: 
{
    "object": "file",
    "id": "file-55c7ikNgfuFPKV1sNmnNxr",
    "purpose": "assistants",
    "filename": "zal01_Labo_Print_dokument_wezwania.pdf",
    "bytes": 1175630,
    "created_at": 1761906835,
    "expires_at": null,
    "status": "processed",
    "status_details": null
}

// DELETE: https://api.openai.com/v1/files/file-BnZt4L8rkctHop7L2uoijU
// Response:
{
    "object": "file",
    "deleted": true,
    "id": "file-55c7ikNgfuFPKV1sNmnNxr"
}

// POST: https://api.openai.com/v1/chat/completions
// Body1:
{
    "model": "gpt-4.1",
    "messages": [
        {
            "role": "system",
            "content": "Jesteś botem, który ma odpowiadać JSON'em - twoja wiadomość będzie parsowana przez kod. Twoją rolą jest czytać treść zdarzeń korporacyjnych z polskiej strony internetowej PAP ESPI/EBI, ustalić czy są to są oficjalne pierwsze ogłoszenia i je skategoryzować na BIDS/TEND/MEET/OTHER. BIDS to 'Skup akcji realizowany przez emitenta papieru wartościowego', TEND to 'Skup acji (wezwanie do sprzedaży akcji) przez podmiot inny niż emitent', MEET to 'Ogłoszenie walnego zgromadzenia obligatoriuszy', OTHER to sytuacja, gdy wydaje ci się, że tekst nie dotyczy żadnego z poprzednio wymienionych kategorii, lub jeśli dany tekst dotyczy np. jakiegoś ogłoszenia skupu akcji, ale nie jest ogłoszeniem samym w sobie, a np. tylko jakąś dodatkową informacją/anegdotą/statystyką/stanowiskiem/wyjaśnieniem/raportem do jakiegoś ogłoszenia. Na podstawie treści podanych przez użytkownika, postaraj się zwrócić kategorię wraz z twoim stopniem pewności, oraz krótkim uzasadnieniem w 2-3 zdaniach dlaczego tak wybrałeś w języku angielskim. Interesują nas oficjalne ogłoszenia przyszłych wydarzeń, zatem bądź precyzjny. Dzisiejsza data to 31.10.2025. Zwróć JSON w postaci: {\"category\": string // BIDS, TEND, MEET, OTHER, \"confidence\": number, \"reason\": string // uzasadnienie }"
        },
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Stanowisko Zarządu Krynica Vitamin S.A. dotyczące ogłoszonego w dniu 1 lipca 2025 r. wezwania do zapisywania się na sprzedaż akcji Spółki"
                },
                {
                    "type": "file",
                    "file": {
                        "file_id": "file-JiDgWyApimDix7osxL7M84"
                    }
                }
            ]
        }
    ]
}

// Response1
{
    "id": "chatcmpl-CWhSEElMaQYMROTsqjYpUpR6CMSgF",
    "object": "chat.completion",
    "created": 1761909570,
    "model": "gpt-4.1-2025-04-14",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "{\n  \"category\": \"OTHER\",\n  \"confidence\": 0.99,\n  \"reason\": \"This document is the Management Board's opinion regarding a takeover bid (wezwanie) announced on July 1, 2025, rather than the actual first announcement of the bid itself. It summarizes key information about the bid, its background, the Board's analysis, and legal context, but does not serve as the original or initial official event notice of the offer. Therefore, it is best classified as 'OTHER', as it is a commentary, not the official tender announcement.\"\n}",
                "refusal": null,
                "annotations": []
            },
            "logprobs": null,
            "finish_reason": "stop"
        }
    ],
    "usage": {
        "prompt_tokens": 7062,
        "completion_tokens": 118,
        "total_tokens": 7180,
        "prompt_tokens_details": {
            "cached_tokens": 0,
            "audio_tokens": 0
        },
        "completion_tokens_details": {
            "reasoning_tokens": 0,
            "audio_tokens": 0,
            "accepted_prediction_tokens": 0,
            "rejected_prediction_tokens": 0
        }
    },
    "service_tier": "default",
    "system_fingerprint": "fp_144ea3b974"
}

// Body 2:
{
    "model": "gpt-4.1",
    "messages": [
        {
            "role": "system",
            "content": "Jesteś botem, który ma odpowiadać JSON'em - twoja wiadomość będzie parsowana przez kod. Twoją rolą jest czytać treść zdarzeń korporacyjnych z polskiej strony internetowej PAP ESPI/EBI, ustalić czy są to są oficjalne pierwsze ogłoszenia i je skategoryzować na BIDS/TEND/MEET/OTHER. BIDS to 'Skup akcji realizowany przez emitenta papieru wartościowego', TEND to 'Skup acji (wezwanie do sprzedaży akcji) przez podmiot inny niż emitent', MEET to 'Ogłoszenie walnego zgromadzenia obligatoriuszy', OTHER to sytuacja, gdy wydaje ci się, że tekst nie dotyczy żadnego z poprzednio wymienionych kategorii, lub jeśli dany tekst dotyczy np. jakiegoś ogłoszenia skupu akcji, ale nie jest ogłoszeniem samym w sobie, a np. tylko jakąś dodatkową informacją/anegdotą/statystyką/stanowiskiem/wyjaśnieniem/raportem do jakiegoś ogłoszenia. Na podstawie treści podanych przez użytkownika, postaraj się zwrócić kategorię wraz z twoim stopniem pewności, oraz krótkim uzasadnieniem w 2-3 zdaniach dlaczego tak wybrałeś w języku angielskim. Interesują nas oficjalne ogłoszenia przyszłych wydarzeń, zatem bądź precyzjny. Dzisiejsza data to 31.10.2025. Zwróć JSON w postaci: {\"category\": string // BIDS, TEND, MEET, OTHER, \"confidence\": number, \"reason\": string // uzasadnienie }"
        },
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Korekta raportu bieżącego nr 6/2025 pt. Informacja o ogłoszeniu wezwania do zapisywania się na sprzedaż akcji Spółki - uzupełnienie załącznika"
                },
                {
                    "type": "file",
                    "file": {
                        "file_id": "file-7QGtBbcJuJCDBh6HF1xHBU"
                    }
                }
            ]
        }
    ]
}

// Response 2:
{
    "id": "chatcmpl-CWhWKxPljtoFzU8FrzNXFa4zYKUjK",
    "object": "chat.completion",
    "created": 1761909824,
    "model": "gpt-4.1-2025-04-14",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "{\n  \"category\": \"TEND\",\n  \"confidence\": 0.98,\n  \"reason\": \"The given announcement and the attached document clearly refer to an official call to tender (wezwanie) for the sale of shares of Labo Print S.A. by entities other than the issuer itself. The correction is only about completing an attachment but does not change the nature of the primary announcement, which is an official tender offer as described in the document title ('WEZWANIE DO ZAPISYWANIA SIĘ NA SPRZEDAŻ AKCJI').\"\n}",
                "refusal": null,
                "annotations": []
            },
            "logprobs": null,
            "finish_reason": "stop"
        }
    ],
    "usage": {
        "prompt_tokens": 1905,
        "completion_tokens": 117,
        "total_tokens": 2022,
        "prompt_tokens_details": {
            "cached_tokens": 0,
            "audio_tokens": 0
        },
        "completion_tokens_details": {
            "reasoning_tokens": 0,
            "audio_tokens": 0,
            "accepted_prediction_tokens": 0,
            "rejected_prediction_tokens": 0
        }
    },
    "service_tier": "default",
    "system_fingerprint": "fp_144ea3b974"
}
