/* Файл создан автоматически скриптом fetch-data.mjs.
   Ручные правки будут перезаписаны. Настройки — в models.config.js. */
window.AI_DATA = {
  "meta": {
    "generatedAt": "2026-10-31T00:19:44.433Z",
    "plan": {
      "id": "go",
      "label": "OpenCode Go",
      "price": "$10/мес"
    },
    "fiveHourShare": 0.2,
    "value": {
      "weight": 0.5,
      "iqFloor": 15,
      "iqCeil": 55,
      "limitFloor": 100,
      "limitCeil": 45000
    },
    "reliability": {
      "components": [
        {
          "key": "intelligence",
          "weight": 0.3,
          "floor": 15,
          "ceil": 55
        },
        {
          "key": "gdpval",
          "weight": 0.2,
          "floor": 0.05,
          "ceil": 0.75
        },
        {
          "key": "contextWindow",
          "weight": 0.1,
          "floor": 128000,
          "ceil": 1000000
        },
        {
          "key": "nonHallucination",
          "weight": 0.25,
          "floor": 0,
          "ceil": 0.9
        },
        {
          "key": "itbenchSre",
          "weight": 0.15,
          "floor": 0.3,
          "ceil": 0.6
        }
      ]
    },
    "visual": {
      "requireWeb": [
        "webdev",
        "img2web"
      ],
      "components": [
        {
          "key": "img2web",
          "weight": 0.4,
          "floor": 1400,
          "ceil": 1720
        },
        {
          "key": "webdev",
          "weight": 0.3,
          "floor": 1400,
          "ceil": 1720
        },
        {
          "key": "vision",
          "weight": 0.3,
          "floor": 1050,
          "ceil": 1320
        }
      ],
      "noVisionPenalty": 0.4,
      "eyeWeakBase": 0.7,
      "eyeBonusThreshold": 0.8,
      "eyeBonusFactor": 1.05,
      "arena": {
        "dataset": "lmarena-ai/leaderboard-dataset",
        "split": "latest",
        "sources": {
          "webdev": {
            "config": "webdev",
            "field": "rating",
            "category": "overall"
          },
          "img2web": {
            "config": "webdev",
            "field": "rating",
            "category": "image_to_webdev"
          },
          "vision": {
            "config": "vision",
            "field": "rating",
            "category": "overall"
          }
        },
        "asOf": "2026-10-28"
      }
    },
    "counts": {
      "total": 56,
      "inGo": 30,
      "extraFromAA": 21,
      "freeOnly": 5,
      "unmatched": 8,
      "withoutIntelligence": 12,
      "withVisual": 35,
      "freeInOc": 4,
      "freeAvailable": 6,
      "needsAaFix": 7
    },
    "matchMethods": {
      "exact": 11,
      "base": 6,
      "fallback:base": 1,
      "override": 2,
      "fallback:canon": 1,
      "canon": 1
    },
    "needsAaFix": [
      {
        "name": "GLM-5.2",
        "suggestions": [
          {
            "slug": "mercury-2-5",
            "name": "Mercury 2.5",
            "score": 0.5
          },
          {
            "slug": "glm-5-3-flash",
            "name": "GLM-5.3-Flash",
            "score": 0.4
          },
          {
            "slug": "glm-5-3-low",
            "name": "GLM-5.3 (Low)",
            "score": 0.4
          }
        ]
      },
      {
        "name": "MiMo-V2.5",
        "suggestions": [
          {
            "slug": "mimo-v2-6-flash",
            "name": "MiMo-V2.6-Flash",
            "score": 0.4
          },
          {
            "slug": "mimo-v2-6-pro",
            "name": "MiMo-V2.6-Pro",
            "score": 0.4
          },
          {
            "slug": "step-5",
            "name": "Step 5 Preview",
            "score": 0.2
          }
        ]
      },
      {
        "name": "MiMo-V2.5-Pro",
        "suggestions": [
          {
            "slug": "mimo-v2-6-pro",
            "name": "MiMo-V2.6-Pro",
            "score": 0.6
          },
          {
            "slug": "mimo-v2-6-flash",
            "name": "MiMo-V2.6-Flash",
            "score": 0.33
          },
          {
            "slug": "gpt-5-5-pro",
            "name": "GPT-5.5 Pro (Xhigh)",
            "score": 0.33
          }
        ]
      },
      {
        "name": "Muse Spark 1.2 Contributor",
        "suggestions": [
          {
            "slug": "muse-spark-open",
            "name": "Muse Spark Open (Xhigh)",
            "score": 0.33
          },
          {
            "slug": "magistral-small-2509",
            "name": "Magistral Small 1.2",
            "score": 0.33
          },
          {
            "slug": "magistral-medium-2509",
            "name": "Magistral Medium 1.2",
            "score": 0.33
          }
        ]
      },
      {
        "name": "Qwen3.8 Flash",
        "suggestions": [
          {
            "slug": "qwen3-8-flash-next",
            "name": "Qwen3.8-Flash-Next",
            "score": 0.75
          },
          {
            "slug": "qwen3-8-27b-medium",
            "name": "Qwen3.8 27B (Medium)",
            "score": 0.4
          },
          {
            "slug": "qwen3-5-omni-flash",
            "name": "Qwen3.5 Omni Flash",
            "score": 0.4
          }
        ]
      },
      {
        "name": "Hy4 preview",
        "suggestions": [
          {
            "slug": "step-5",
            "name": "Step 5 Preview",
            "score": 0.25
          },
          {
            "slug": "ernie-5-0-thinking-preview",
            "name": "ERNIE 5.0 Thinking Preview",
            "score": 0.17
          },
          {
            "slug": "gemini-3-1-pro-preview",
            "name": "Gemini 3.1 Pro Preview",
            "score": 0.17
          }
        ]
      },
      {
        "name": "GPT 5.6 Luna",
        "suggestions": [
          {
            "slug": "gpt-6-luna-xhigh",
            "name": "GPT-6 Luna (Xhigh)",
            "score": 0.6
          },
          {
            "slug": "gpt-6-luna-medium",
            "name": "GPT-6 Luna (Medium)",
            "score": 0.6
          },
          {
            "slug": "gpt-6-luna",
            "name": "GPT-6 Luna (Max)",
            "score": 0.6
          }
        ]
      }
    ],
    "free": {
      "topN": 3,
      "top": [
        {
          "name": "DeepSeek V4.1 Flash Free",
          "base": "DeepSeek V4.1 Flash",
          "intelligence": 32.4896393532027,
          "aaSlug": "deepseek-v4-1-flash-1017"
        },
        {
          "name": "GLM-5.3-Flash Free",
          "base": "GLM-5.3-Flash",
          "intelligence": 27.753889160883,
          "aaSlug": "glm-5-3-flash"
        },
        {
          "name": "MiMo-V2.6-Flash Free",
          "base": "MiMo-V2.6-Flash",
          "intelligence": 26.7276981444568,
          "aaSlug": "mimo-v2-6-flash"
        }
      ]
    },
    "sources": {
      "aa": "https://artificialanalysis.ai/leaderboards/models",
      "goDocs": "https://opencode.ai/docs/go/",
      "goModels": "https://opencode.ai/inference/go/v1/models",
      "ocModels": "https://opencode.ai/docs/zen/",
      "arenaRows": "https://datasets-server.huggingface.co/rows"
    },
    "notes": {
      "intelligence": "Artificial Analysis Intelligence Index — сводный балл по 10 независимым тестам: знания, математика, код, агентные задачи, следование инструкциям. Показывает, насколько модель умна в целом и наколько она широко смотрит на вещи при решении задач",
      "reliability": "Показатель того, насколько модель хорошо справляется с большими и сложными задачами, не галлюцинирует, не придумывает лишнего, делает точно именно то что попросили, и насколько хорошо проверяет работу других моделей.",
      "visual": "Насколько модель хорошо работает с визуалом: смотрит скриншоты, понимает, что такое красиво, собирает качественный UI/UX, пишет хорошие визуальные промпты.",
      "costPerTask": "Сколько совокупного IQ вы получаете за потраченные токены модели. Чем лучше параметр - тем более экономически выгода модель.",
      "efficiency": "Показатель того насколько модель имеет большой IQ и при этом насколько щедрые лимиты под нее выделяет подписка OpenCode Go. Чем выше показатель — тем целесообразнее использовать модель для постоянной работы.",
      "free": "Помимо подписки OpenCode Go часть моделей доступна бесплатно, без подписки. Все они показаны в списке отдельными строками с зелёным бейджем «Free» "
    }
  },
  "models": [
    {
      "name": "GLM-5.3-Flash",
      "inGo": true,
      "goModelId": "glm-5.3-flash",
      "inGoApi": true,
      "creator": "Z AI",
      "color": "#1c7ff8",
      "logo": "https://artificialanalysis.ai/img/logos/zai.svg",
      "aaSlug": "glm-5-3-flash",
      "aaName": "GLM-5.3-Flash",
      "aaUrl": "https://artificialanalysis.ai/models/glm-5-3-flash",
      "aaMatch": "exact",
      "needsAaFix": false,
      "intelligence": 27.753889160883,
      "intelligenceEstimated": false,
      "costPerTask": 0.5833103440014082,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 0.15,
        "output": 0.5,
        "cachedRead": 0.03,
        "cachedWrite": null,
        "monthlyLimit": 60,
        "limitRaw": "$60",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 0.15,
            "output": 0.5,
            "cachedRead": 0.03,
            "monthlyLimit": 60
          }
        ],
        "requests5h": 6320,
        "requestsWeek": 15790,
        "requestsMonth": 31580,
        "unlimited": false,
        "mix": {
          "input": 1000,
          "cached": 55000,
          "output": 200
        },
        "tokensPerRequest": 56200,
        "costPerRequest": 0.0019,
        "limit5hUsd": 12,
        "tokensPer5h": 355184000
      },
      "efficiency": 6320,
      "efficiencyProvisional": false,
      "valueScore": 46.5,
      "reliability": 48.9,
      "visual": 72.2,
      "visualParts": {
        "img2web": {
          "value": 1578.3233115154308,
          "rank": 22,
          "n": 5623
        },
        "webdev": {
          "value": 1606.6486731495352,
          "rank": 32,
          "n": 21587
        },
        "vision": {
          "value": 1293.8678100737243,
          "rank": 24,
          "n": 16254
        }
      },
      "visualEye": 1.05,
      "freeInOc": true,
      "status": "active"
    },
    {
      "name": "GLM-5.3",
      "inGo": true,
      "goModelId": "glm-5.3",
      "inGoApi": true,
      "creator": "Z AI",
      "color": "#1c7ff8",
      "logo": "https://artificialanalysis.ai/img/logos/zai.svg",
      "aaSlug": "glm-5-3",
      "aaName": "GLM-5.3 (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/glm-5-3",
      "aaMatch": "base",
      "needsAaFix": false,
      "intelligence": 31.653381843882,
      "intelligenceEstimated": false,
      "costPerTask": 5.009264601719954,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 1.4,
        "output": 4.4,
        "cachedRead": 0.26,
        "cachedWrite": null,
        "monthlyLimit": 15,
        "limitRaw": "$15",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 1.4,
            "output": 4.4,
            "cachedRead": 0.26,
            "monthlyLimit": 15
          }
        ],
        "requests5h": 220,
        "requestsWeek": 540,
        "requestsMonth": 1080,
        "unlimited": false,
        "mix": {
          "input": 700,
          "cached": 52000,
          "output": 150
        },
        "tokensPerRequest": 52850,
        "costPerRequest": 0.01516,
        "limit5hUsd": 3,
        "tokensPer5h": 11627000
      },
      "efficiency": 220,
      "efficiencyProvisional": false,
      "valueScore": 23.2,
      "reliability": 56.2,
      "visual": 27.9,
      "visualParts": {
        "webdev": {
          "value": 1622.8098625429598,
          "rank": 27,
          "n": 11150
        }
      },
      "visualEye": 0.4,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "GLM-5.2",
      "inGo": true,
      "goModelId": "glm-5.2",
      "inGoApi": true,
      "creator": "Z AI",
      "color": "#1c7ff8",
      "logo": null,
      "aaSlug": null,
      "aaName": null,
      "aaUrl": null,
      "aaMatch": null,
      "needsAaFix": true,
      "intelligence": null,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": null,
      "isReasoning": null,
      "isOpenWeights": null,
      "go": {
        "input": 1.4,
        "output": 4.4,
        "cachedRead": 0.26,
        "cachedWrite": null,
        "monthlyLimit": 60,
        "limitRaw": "$60",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 1.4,
            "output": 4.4,
            "cachedRead": 0.26,
            "monthlyLimit": 60
          }
        ],
        "requests5h": 880,
        "requestsWeek": 2150,
        "requestsMonth": 4300,
        "unlimited": false,
        "mix": null,
        "tokensPerRequest": null,
        "costPerRequest": 0.013636363636363636,
        "limit5hUsd": 12,
        "tokensPer5h": null
      },
      "efficiency": 880,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": null,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Kimi K3.1 Pro",
      "inGo": true,
      "goModelId": "kimi-k3.1-pro",
      "inGoApi": true,
      "creator": "Kimi",
      "color": "#047AFE",
      "logo": "https://artificialanalysis.ai/img/logos/kimi.jpg",
      "aaSlug": "kimi-k3-1-pro",
      "aaName": "Kimi K3.1 Pro",
      "aaUrl": "https://artificialanalysis.ai/models/kimi-k3-1-pro",
      "aaMatch": "exact",
      "needsAaFix": false,
      "intelligence": 46.0026236744189,
      "intelligenceEstimated": false,
      "costPerTask": 3.6812002895742055,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": {
        "input": 2,
        "output": 10,
        "cachedRead": 0.2,
        "cachedWrite": 2,
        "monthlyLimit": 15,
        "limitRaw": "$15",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 2,
            "output": 10,
            "cachedRead": 0.2,
            "monthlyLimit": 15
          }
        ],
        "requests5h": 147,
        "requestsWeek": 368,
        "requestsMonth": 735,
        "unlimited": false,
        "mix": {
          "input": 1050,
          "cached": 76500,
          "output": 300
        },
        "tokensPerRequest": 77850,
        "costPerRequest": 0.0204,
        "limit5hUsd": 3,
        "tokensPer5h": 11443950
      },
      "efficiency": 147,
      "efficiencyProvisional": false,
      "valueScore": 22.1,
      "reliability": 83.1,
      "visual": 36.8,
      "visualParts": {
        "webdev": {
          "value": 1694.582449167362,
          "rank": 9,
          "n": 2671
        }
      },
      "visualEye": 0.4,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Kimi K3",
      "inGo": true,
      "goModelId": "kimi-k3",
      "inGoApi": true,
      "creator": "—",
      "color": "#8A8A93",
      "logo": null,
      "aaSlug": "kimi-k3-low",
      "aaName": "Kimi K3 (Low)",
      "aaUrl": "https://artificialanalysis.ai/models/kimi-k3-low",
      "aaMatch": "fallback:base",
      "needsAaFix": false,
      "intelligence": 17.4191985300887,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": 1048576,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 3,
        "output": 15,
        "cachedRead": 0.3,
        "cachedWrite": 3,
        "monthlyLimit": 15,
        "limitRaw": "$15",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 3,
            "output": 15,
            "cachedRead": 0.3,
            "monthlyLimit": 15
          }
        ],
        "requests5h": 110,
        "requestsWeek": 250,
        "requestsMonth": 490,
        "unlimited": false,
        "mix": {
          "input": 1050,
          "cached": 76500,
          "output": 300
        },
        "tokensPerRequest": 77850,
        "costPerRequest": 0.0306,
        "limit5hUsd": 3,
        "tokensPer5h": 8563500
      },
      "efficiency": 110,
      "efficiencyProvisional": false,
      "valueScore": 3.1,
      "reliability": 29.5,
      "visual": 26.5,
      "visualParts": {
        "img2web": {
          "value": 1578.7771939256486,
          "rank": 21,
          "n": 3936
        },
        "webdev": {
          "value": 1656.390908396489,
          "rank": 18,
          "n": 21281
        }
      },
      "visualEye": 0.4,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Kimi K2.7 Code",
      "inGo": true,
      "goModelId": "kimi-k2.7-code",
      "inGoApi": true,
      "creator": "Kimi",
      "color": "#047AFE",
      "logo": "https://artificialanalysis.ai/img/logos/kimi.jpg",
      "aaSlug": "kimi-k2-7-code",
      "aaName": "Kimi K2.7 Code",
      "aaUrl": "https://artificialanalysis.ai/models/kimi-k2-7-code",
      "aaMatch": "exact",
      "needsAaFix": false,
      "intelligence": null,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": 256000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 0.95,
        "output": 4,
        "cachedRead": 0.19,
        "cachedWrite": null,
        "monthlyLimit": 60,
        "limitRaw": "$60",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 0.95,
            "output": 4,
            "cachedRead": 0.19,
            "monthlyLimit": 60
          }
        ],
        "requests5h": 1350,
        "requestsWeek": 3380,
        "requestsMonth": 6750,
        "unlimited": false,
        "mix": {
          "input": 870,
          "cached": 55000,
          "output": 200
        },
        "tokensPerRequest": 56070,
        "costPerRequest": 0.0120765,
        "limit5hUsd": 12,
        "tokensPer5h": 75694500
      },
      "efficiency": 1350,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 14.7,
      "visual": 12,
      "visualParts": {
        "img2web": {
          "value": 1512.8898692988346,
          "rank": 40,
          "n": 921
        },
        "webdev": {
          "value": 1473.5355204604502,
          "rank": 73,
          "n": 4950
        }
      },
      "visualEye": 0.4,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "LongCat-2.0",
      "inGo": true,
      "goModelId": "longcat-2.0",
      "inGoApi": true,
      "creator": "LongCat",
      "color": "#2adb65",
      "logo": "https://artificialanalysis.ai/img/logos/longcat.svg",
      "aaSlug": "longcat-2-0",
      "aaName": "LongCat 2.0",
      "aaUrl": "https://artificialanalysis.ai/models/longcat-2-0",
      "aaMatch": "exact",
      "needsAaFix": false,
      "intelligence": null,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 0.3,
        "output": 1.2,
        "cachedRead": 0.006,
        "cachedWrite": null,
        "monthlyLimit": 60,
        "limitRaw": "$60",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 0.3,
            "output": 1.2,
            "cachedRead": 0.006,
            "monthlyLimit": 60
          }
        ],
        "requests5h": 11400,
        "requestsWeek": 28600,
        "requestsMonth": 57200,
        "unlimited": false,
        "mix": {
          "input": 920,
          "cached": 88900,
          "output": 200
        },
        "tokensPerRequest": 90020,
        "costPerRequest": 0.0010494,
        "limit5hUsd": 12,
        "tokensPer5h": 1026228000
      },
      "efficiency": 11400,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 100,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Step 5 Preview",
      "inGo": true,
      "goModelId": "step-5-preview",
      "inGoApi": true,
      "creator": "StepFun",
      "color": "#00F5E7",
      "logo": "https://artificialanalysis.ai/img/logos/stepfun.svg",
      "aaSlug": "step-5",
      "aaName": "Step 5 Preview",
      "aaUrl": "https://artificialanalysis.ai/models/step-5",
      "aaMatch": "exact",
      "needsAaFix": false,
      "intelligence": 28.5283090216016,
      "intelligenceEstimated": false,
      "costPerTask": 2.3452525606205166,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 1,
        "output": 2.7,
        "cachedRead": 0.1,
        "cachedWrite": null,
        "monthlyLimit": 15,
        "limitRaw": "$15",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 1,
            "output": 2.7,
            "cachedRead": 0.1,
            "monthlyLimit": 15
          }
        ],
        "requests5h": 430,
        "requestsWeek": 1070,
        "requestsMonth": 2130,
        "unlimited": false,
        "mix": {
          "input": 1000,
          "cached": 55000,
          "output": 200
        },
        "tokensPerRequest": 56200,
        "costPerRequest": 0.00704,
        "limit5hUsd": 3,
        "tokensPer5h": 24166000
      },
      "efficiency": 430,
      "efficiencyProvisional": false,
      "valueScore": 28.4,
      "reliability": 50.4,
      "visual": 55.1,
      "visualParts": {
        "img2web": {
          "value": 1550.4117076786192,
          "rank": 28,
          "n": 3300
        },
        "webdev": {
          "value": 1571.03868087871,
          "rank": 42,
          "n": 5966
        },
        "vision": {
          "value": 1264.584469224122,
          "rank": 49,
          "n": 1649
        }
      },
      "visualEye": 0.938,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Beam Free",
      "inGo": true,
      "goModelId": "beam-free",
      "inGoApi": true,
      "creator": "Reflection",
      "color": "#195428",
      "logo": "https://artificialanalysis.ai/img/logos/reflection.svg",
      "aaSlug": "reflection-beam",
      "aaName": "Beam 1.0",
      "aaUrl": "https://artificialanalysis.ai/models/reflection-beam",
      "aaMatch": "override",
      "needsAaFix": false,
      "intelligence": 17.7307282547205,
      "intelligenceEstimated": false,
      "costPerTask": 0.28440671352465285,
      "contextWindow": 1048576,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 0,
        "output": 0,
        "cachedRead": 0,
        "cachedWrite": null,
        "monthlyLimit": null,
        "limitRaw": "Unlimited",
        "limitNote": "limited time",
        "tiers": [
          {
            "label": null,
            "input": 0,
            "output": 0,
            "cachedRead": 0,
            "monthlyLimit": null
          }
        ],
        "requests5h": null,
        "requestsWeek": null,
        "requestsMonth": null,
        "unlimited": true,
        "mix": null,
        "tokensPerRequest": null,
        "costPerRequest": null,
        "limit5hUsd": null,
        "tokensPer5h": null
      },
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": 26.1,
      "reliability": 30.1,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "freeInOc": false,
      "status": "unlimited"
    },
    {
      "name": "Iceman Contributor Free",
      "inGo": true,
      "goModelId": "iceman-contributor-free",
      "inGoApi": true,
      "creator": "—",
      "color": "#8A8A93",
      "logo": null,
      "aaSlug": null,
      "aaName": null,
      "aaUrl": null,
      "aaMatch": null,
      "needsAaFix": false,
      "intelligence": null,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": null,
      "isReasoning": null,
      "isOpenWeights": null,
      "go": {
        "input": 0,
        "output": 0,
        "cachedRead": 0,
        "cachedWrite": null,
        "monthlyLimit": null,
        "limitRaw": "Unlimited",
        "limitNote": "limited time",
        "tiers": [
          {
            "label": null,
            "input": 0,
            "output": 0,
            "cachedRead": 0,
            "monthlyLimit": null
          }
        ],
        "requests5h": null,
        "requestsWeek": null,
        "requestsMonth": null,
        "unlimited": true,
        "mix": null,
        "tokensPerRequest": null,
        "costPerRequest": null,
        "limit5hUsd": null,
        "tokensPer5h": null
      },
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": null,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "freeInOc": false,
      "status": "unlimited"
    },
    {
      "name": "MiMo-V2.6-Flash",
      "inGo": true,
      "goModelId": "mimo-v2.6-flash",
      "inGoApi": true,
      "creator": "Xiaomi",
      "color": "#ff6900",
      "logo": "https://artificialanalysis.ai/img/logos/xiaomi.svg",
      "aaSlug": "mimo-v2-6-flash",
      "aaName": "MiMo-V2.6-Flash",
      "aaUrl": "https://artificialanalysis.ai/models/mimo-v2-6-flash",
      "aaMatch": "exact",
      "needsAaFix": false,
      "intelligence": 26.7276981444568,
      "intelligenceEstimated": false,
      "costPerTask": 0.12852987084014672,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 0.14,
        "output": 0.28,
        "cachedRead": 0.0028,
        "cachedWrite": null,
        "monthlyLimit": 60,
        "limitRaw": "$60",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 0.14,
            "output": 0.28,
            "cachedRead": 0.0028,
            "monthlyLimit": 60
          }
        ],
        "requests5h": 30100,
        "requestsWeek": 75200,
        "requestsMonth": 150400,
        "unlimited": false,
        "mix": {
          "input": 830,
          "cached": 71500,
          "output": 295
        },
        "tokensPerRequest": 72625,
        "costPerRequest": 0.000399,
        "limit5hUsd": 12,
        "tokensPer5h": 2186012500
      },
      "efficiency": 30100,
      "efficiencyProvisional": false,
      "valueScore": 52.3,
      "reliability": 47,
      "visual": 64.6,
      "visualParts": {
        "img2web": {
          "value": 1595.540797821539,
          "rank": 18,
          "n": 2318
        },
        "webdev": {
          "value": 1637.1737027632755,
          "rank": 22,
          "n": 7068
        },
        "vision": {
          "value": 1255.7442227458723,
          "rank": 59,
          "n": 3618
        }
      },
      "visualEye": 0.929,
      "freeInOc": true,
      "status": "active"
    },
    {
      "name": "MiMo-V2.6-Pro",
      "inGo": true,
      "goModelId": "mimo-v2.6-pro",
      "inGoApi": true,
      "creator": "Xiaomi",
      "color": "#ff6900",
      "logo": "https://artificialanalysis.ai/img/logos/xiaomi.svg",
      "aaSlug": "mimo-v2-6-pro",
      "aaName": "MiMo-V2.6-Pro",
      "aaUrl": "https://artificialanalysis.ai/models/mimo-v2-6-pro",
      "aaMatch": "exact",
      "needsAaFix": false,
      "intelligence": 29.8897833093321,
      "intelligenceEstimated": false,
      "costPerTask": 0.25718036275876155,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 0.435,
        "output": 0.87,
        "cachedRead": 0.003625,
        "cachedWrite": null,
        "monthlyLimit": 15,
        "limitRaw": "$15",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 0.435,
            "output": 0.87,
            "cachedRead": 0.003625,
            "monthlyLimit": 15
          }
        ],
        "requests5h": 3250,
        "requestsWeek": 8150,
        "requestsMonth": 16300,
        "unlimited": false,
        "mix": {
          "input": 790,
          "cached": 86000,
          "output": 305
        },
        "tokensPerRequest": 87095,
        "costPerRequest": 0.00092075,
        "limit5hUsd": 3,
        "tokensPer5h": 283058750
      },
      "efficiency": 3250,
      "efficiencyProvisional": false,
      "valueScore": 46.1,
      "reliability": 52.9,
      "visual": 65.1,
      "visualParts": {
        "img2web": {
          "value": 1598.2805724829486,
          "rank": 16,
          "n": 2627
        },
        "webdev": {
          "value": 1625.417548626546,
          "rank": 25,
          "n": 6820
        },
        "vision": {
          "value": 1262.8399732080727,
          "rank": 53,
          "n": 1754
        }
      },
      "visualEye": 0.936,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "MiMo-V2.5",
      "inGo": true,
      "goModelId": "mimo-v2.5",
      "inGoApi": false,
      "creator": "Xiaomi",
      "color": "#ff6900",
      "logo": null,
      "aaSlug": null,
      "aaName": null,
      "aaUrl": null,
      "aaMatch": null,
      "needsAaFix": true,
      "intelligence": null,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": null,
      "isReasoning": null,
      "isOpenWeights": null,
      "go": {
        "input": 0.14,
        "output": 0.28,
        "cachedRead": 0.0028,
        "cachedWrite": null,
        "monthlyLimit": 60,
        "limitRaw": "$60",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 0.14,
            "output": 0.28,
            "cachedRead": 0.0028,
            "monthlyLimit": 60
          }
        ],
        "requests5h": 30100,
        "requestsWeek": 75200,
        "requestsMonth": 150400,
        "unlimited": false,
        "mix": {
          "input": 830,
          "cached": 71500,
          "output": 295
        },
        "tokensPerRequest": 72625,
        "costPerRequest": 0.000399,
        "limit5hUsd": 12,
        "tokensPer5h": 2186012500
      },
      "efficiency": 30100,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": null,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "MiMo-V2.5-Pro",
      "inGo": true,
      "goModelId": "mimo-v2.5-pro",
      "inGoApi": false,
      "creator": "Xiaomi",
      "color": "#ff6900",
      "logo": null,
      "aaSlug": null,
      "aaName": null,
      "aaUrl": null,
      "aaMatch": null,
      "needsAaFix": true,
      "intelligence": null,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": null,
      "isReasoning": null,
      "isOpenWeights": null,
      "go": {
        "input": 0.435,
        "output": 0.87,
        "cachedRead": 0.003625,
        "cachedWrite": null,
        "monthlyLimit": 15,
        "limitRaw": "$15",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 0.435,
            "output": 0.87,
            "cachedRead": 0.003625,
            "monthlyLimit": 15
          }
        ],
        "requests5h": 3250,
        "requestsWeek": 8150,
        "requestsMonth": 16300,
        "unlimited": false,
        "mix": {
          "input": 790,
          "cached": 86000,
          "output": 305
        },
        "tokensPerRequest": 87095,
        "costPerRequest": 0.00092075,
        "limit5hUsd": 3,
        "tokensPer5h": 283058750
      },
      "efficiency": 3250,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": null,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "MiniMax M3.1 Flash",
      "inGo": true,
      "goModelId": "minimax-m3.1-flash",
      "inGoApi": true,
      "creator": "MiniMax",
      "color": "#EB3568",
      "logo": "https://artificialanalysis.ai/img/logos/minimax.svg",
      "aaSlug": "minimax-m3-1-flash",
      "aaName": "MiniMax-M3.1-Flash",
      "aaUrl": "https://artificialanalysis.ai/models/minimax-m3-1-flash",
      "aaMatch": "exact",
      "needsAaFix": false,
      "intelligence": 28.9095214290458,
      "intelligenceEstimated": false,
      "costPerTask": 0.49097067348453205,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 0.15,
        "output": 0.6,
        "cachedRead": 0.015,
        "cachedWrite": null,
        "monthlyLimit": 20,
        "limitRaw": "$20",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 0.15,
            "output": 0.6,
            "cachedRead": 0.015,
            "monthlyLimit": 20
          }
        ],
        "requests5h": 3880,
        "requestsWeek": 9690,
        "requestsMonth": 19380,
        "unlimited": false,
        "mix": {
          "input": 500,
          "cached": 49400,
          "output": 360
        },
        "tokensPerRequest": 50260,
        "costPerRequest": 0.001032,
        "limit5hUsd": 4,
        "tokensPer5h": 195008800
      },
      "efficiency": 3880,
      "efficiencyProvisional": false,
      "valueScore": 45.6,
      "reliability": 51.1,
      "visual": 22.8,
      "visualParts": {
        "webdev": {
          "value": 1582.4578204140666,
          "rank": 38,
          "n": 3062
        }
      },
      "visualEye": 0.4,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "MiniMax M3",
      "inGo": true,
      "goModelId": "minimax-m3",
      "inGoApi": true,
      "creator": "MiniMax",
      "color": "#EB3568",
      "logo": "https://artificialanalysis.ai/img/logos/minimax.svg",
      "aaSlug": "minimax-m3",
      "aaName": "MiniMax-M3",
      "aaUrl": "https://artificialanalysis.ai/models/minimax-m3",
      "aaMatch": "exact",
      "needsAaFix": false,
      "intelligence": 18.7289083859255,
      "intelligenceEstimated": false,
      "costPerTask": 1.2850974407373852,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 0.3,
        "output": 1.2,
        "cachedRead": 0.06,
        "cachedWrite": null,
        "monthlyLimit": 60,
        "limitRaw": "$60",
        "limitNote": null,
        "tiers": [
          {
            "label": "≤ 512K tokens",
            "input": 0.3,
            "output": 1.2,
            "cachedRead": 0.06,
            "monthlyLimit": 60
          },
          {
            "label": "> 512K tokens",
            "input": 0.6,
            "output": 2.4,
            "cachedRead": 0.12,
            "monthlyLimit": 60
          }
        ],
        "requests5h": 3200,
        "requestsWeek": 8000,
        "requestsMonth": 16000,
        "unlimited": false,
        "mix": {
          "input": 510,
          "cached": 56000,
          "output": 190
        },
        "tokensPerRequest": 56700,
        "costPerRequest": 0.003741,
        "limit5hUsd": 12,
        "tokensPer5h": 181440000
      },
      "efficiency": 3200,
      "efficiencyProvisional": false,
      "valueScore": 23,
      "reliability": 32,
      "visual": 36,
      "visualParts": {
        "img2web": {
          "value": 1470.3442173295377,
          "rank": 47,
          "n": 5983
        },
        "webdev": {
          "value": 1483.3051511403955,
          "rank": 69,
          "n": 21032
        },
        "vision": {
          "value": 1251.0548647162113,
          "rank": 62,
          "n": 19844
        }
      },
      "visualEye": 0.923,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Muse Spark 1.3 Contributor",
      "inGo": true,
      "goModelId": "muse-spark-1.3-contributor",
      "inGoApi": true,
      "creator": "—",
      "color": "#8A8A93",
      "logo": null,
      "aaSlug": "muse-spark-1-3",
      "aaName": "Muse Spark 1.3 (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/muse-spark-1-3",
      "aaMatch": "fallback:canon",
      "needsAaFix": false,
      "intelligence": 36.4172039139368,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": {
        "input": 0.1,
        "output": 0.2,
        "cachedRead": 0.002,
        "cachedWrite": null,
        "monthlyLimit": 60,
        "limitRaw": "$60",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 0.1,
            "output": 0.2,
            "cachedRead": 0.002,
            "monthlyLimit": 60
          }
        ],
        "requests5h": 45300,
        "requestsWeek": 113300,
        "requestsMonth": 226600,
        "unlimited": false,
        "mix": {
          "input": 620,
          "cached": 71400,
          "output": 300
        },
        "tokensPerRequest": 72320,
        "costPerRequest": 0.0002648,
        "limit5hUsd": 12,
        "tokensPer5h": 3276096000
      },
      "efficiency": 45300,
      "efficiencyProvisional": false,
      "valueScore": 73.2,
      "reliability": 65.2,
      "visual": 86.9,
      "visualParts": {
        "img2web": {
          "value": 1640.3894130603526,
          "rank": 8,
          "n": 5679
        },
        "webdev": {
          "value": 1656.2348593321256,
          "rank": 19,
          "n": 10796
        },
        "vision": {
          "value": 1308.414166200037,
          "rank": 12,
          "n": 5392
        }
      },
      "visualEye": 1.05,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Muse Spark 1.2 Contributor",
      "inGo": true,
      "goModelId": "muse-spark-1.2-contributor",
      "inGoApi": true,
      "creator": "Meta",
      "color": "#0089f4",
      "logo": null,
      "aaSlug": null,
      "aaName": null,
      "aaUrl": null,
      "aaMatch": null,
      "needsAaFix": true,
      "intelligence": null,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": null,
      "isReasoning": null,
      "isOpenWeights": null,
      "go": {
        "input": 0.1,
        "output": 0.2,
        "cachedRead": 0.002,
        "cachedWrite": null,
        "monthlyLimit": 60,
        "limitRaw": "$60",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 0.1,
            "output": 0.2,
            "cachedRead": 0.002,
            "monthlyLimit": 60
          }
        ],
        "requests5h": 45300,
        "requestsWeek": 113300,
        "requestsMonth": 226600,
        "unlimited": false,
        "mix": {
          "input": 620,
          "cached": 71400,
          "output": 300
        },
        "tokensPerRequest": 72320,
        "costPerRequest": 0.0002648,
        "limit5hUsd": 12,
        "tokensPer5h": 3276096000
      },
      "efficiency": 45300,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": null,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Qwen3.8 Max",
      "inGo": true,
      "goModelId": "qwen3.8-max",
      "inGoApi": true,
      "creator": "Alibaba",
      "color": "#ff7018",
      "logo": "https://artificialanalysis.ai/img/logos/alibaba.svg",
      "aaSlug": "qwen3-8-max",
      "aaName": "Qwen3.8 Max (0902)",
      "aaUrl": "https://artificialanalysis.ai/models/qwen3-8-max",
      "aaMatch": "base",
      "needsAaFix": false,
      "intelligence": 33.5545627367888,
      "intelligenceEstimated": false,
      "costPerTask": 10.023891571541945,
      "contextWindow": 983616,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": {
        "input": 2,
        "output": 6,
        "cachedRead": 0.25,
        "cachedWrite": 2.5,
        "monthlyLimit": 15,
        "limitRaw": "$15",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 2,
            "output": 6,
            "cachedRead": 0.25,
            "monthlyLimit": 15
          }
        ],
        "requests5h": 160,
        "requestsWeek": 400,
        "requestsMonth": 810,
        "unlimited": false,
        "mix": {
          "input": 420,
          "cached": 66000,
          "output": 200
        },
        "tokensPerRequest": 66620,
        "costPerRequest": 0.01854,
        "limit5hUsd": 3,
        "tokensPer5h": 10659200
      },
      "efficiency": 160,
      "efficiencyProvisional": false,
      "valueScore": 18.9,
      "reliability": 59.3,
      "visual": 88.9,
      "visualParts": {
        "img2web": {
          "value": 1636.588360038123,
          "rank": 9,
          "n": 1163
        },
        "webdev": {
          "value": 1675.9355584770149,
          "rank": 13,
          "n": 17936
        },
        "vision": {
          "value": 1312.935382439709,
          "rank": 10,
          "n": 9957
        }
      },
      "visualEye": 1.05,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Qwen3.8 Flash",
      "inGo": true,
      "goModelId": "qwen3.8-flash",
      "inGoApi": true,
      "creator": "Alibaba",
      "color": "#ff7018",
      "logo": null,
      "aaSlug": null,
      "aaName": null,
      "aaUrl": null,
      "aaMatch": null,
      "needsAaFix": true,
      "intelligence": null,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": null,
      "isReasoning": null,
      "isOpenWeights": null,
      "go": {
        "input": 0.15,
        "output": 0.47,
        "cachedRead": 0.016,
        "cachedWrite": 0.2,
        "monthlyLimit": 30,
        "limitRaw": "$30",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 0.15,
            "output": 0.47,
            "cachedRead": 0.016,
            "monthlyLimit": 30
          }
        ],
        "requests5h": 5400,
        "requestsWeek": 13500,
        "requestsMonth": 27000,
        "unlimited": false,
        "mix": {
          "input": 600,
          "cached": 58000,
          "output": 200
        },
        "tokensPerRequest": 58800,
        "costPerRequest": 0.001112,
        "limit5hUsd": 6,
        "tokensPer5h": 317520000
      },
      "efficiency": 5400,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": null,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Qwen3.7 Plus",
      "inGo": true,
      "goModelId": "qwen3.7-plus",
      "inGoApi": true,
      "creator": "Alibaba",
      "color": "#ff7018",
      "logo": "https://artificialanalysis.ai/img/logos/alibaba.svg",
      "aaSlug": "qwen3-7-plus",
      "aaName": "Qwen3.7 Plus",
      "aaUrl": "https://artificialanalysis.ai/models/qwen3-7-plus",
      "aaMatch": "exact",
      "needsAaFix": false,
      "intelligence": null,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": {
        "input": 0.4,
        "output": 1.6,
        "cachedRead": 0.04,
        "cachedWrite": 0.5,
        "monthlyLimit": 60,
        "limitRaw": "$60",
        "limitNote": null,
        "tiers": [
          {
            "label": "≤ 256K tokens",
            "input": 0.4,
            "output": 1.6,
            "cachedRead": 0.04,
            "monthlyLimit": 60
          },
          {
            "label": "> 256K tokens",
            "input": 1.2,
            "output": 4.8,
            "cachedRead": 0.12,
            "monthlyLimit": 60
          }
        ],
        "requests5h": 4300,
        "requestsWeek": 10800,
        "requestsMonth": 21600,
        "unlimited": false,
        "mix": {
          "input": 500,
          "cached": 57000,
          "output": 190
        },
        "tokensPerRequest": 57690,
        "costPerRequest": 0.002784,
        "limit5hUsd": 12,
        "tokensPer5h": 248067000
      },
      "efficiency": 4300,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 100,
      "visual": null,
      "visualParts": {
        "vision": {
          "value": 1278.1470332728204,
          "rank": 37,
          "n": 14212
        }
      },
      "visualEye": null,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "DeepSeek V4.1 Flash",
      "inGo": true,
      "goModelId": "deepseek-v4.1-flash",
      "inGoApi": true,
      "creator": "DeepSeek",
      "color": "#2243e6",
      "logo": "https://artificialanalysis.ai/img/logos/deepseek.svg",
      "aaSlug": "deepseek-v4-1-flash-1017",
      "aaName": "DeepSeek V4.1 Flash 1017 (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017",
      "aaMatch": "canon",
      "needsAaFix": false,
      "intelligence": 32.4896393532027,
      "intelligenceEstimated": false,
      "costPerTask": 0.60210514783598,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 0.15,
        "output": 0.6,
        "cachedRead": 0.003,
        "cachedWrite": null,
        "monthlyLimit": 100,
        "limitRaw": "$100",
        "limitNote": null,
        "tiers": [
          {
            "label": "Off-Peak",
            "input": 0.15,
            "output": 0.6,
            "cachedRead": 0.003,
            "monthlyLimit": 100
          },
          {
            "label": "Peak",
            "input": 0.3,
            "output": 1.2,
            "cachedRead": 0.006,
            "monthlyLimit": 100
          }
        ],
        "requests5h": 43330,
        "requestsWeek": 108330,
        "requestsMonth": 216670,
        "unlimited": false,
        "mix": {
          "input": 410,
          "cached": 71300,
          "output": 310
        },
        "tokensPerRequest": 72020,
        "costPerRequest": 0.0004614,
        "limit5hUsd": 20,
        "tokensPer5h": 3120626600
      },
      "efficiency": 43330,
      "efficiencyProvisional": false,
      "valueScore": 65.9,
      "reliability": 57.8,
      "visual": 33.1,
      "visualParts": {
        "webdev": {
          "value": 1665.040445245608,
          "rank": 16,
          "n": 7842
        }
      },
      "visualEye": 0.4,
      "freeInOc": true,
      "status": "active"
    },
    {
      "name": "DeepSeek V4 Pro",
      "inGo": true,
      "goModelId": "deepseek-v4-pro",
      "inGoApi": true,
      "creator": "DeepSeek",
      "color": "#2243e6",
      "logo": "https://artificialanalysis.ai/img/logos/deepseek.svg",
      "aaSlug": "deepseek-v4-pro",
      "aaName": "DeepSeek V4 Pro 0813 (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/deepseek-v4-pro",
      "aaMatch": "override",
      "needsAaFix": false,
      "intelligence": 23.0632981493003,
      "intelligenceEstimated": false,
      "costPerTask": 1.7691338076407441,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 0.66,
        "output": 1.98,
        "cachedRead": 0.022,
        "cachedWrite": null,
        "monthlyLimit": 15,
        "limitRaw": "$15",
        "limitNote": null,
        "tiers": [
          {
            "label": "Off-Peak",
            "input": 0.66,
            "output": 1.98,
            "cachedRead": 0.022,
            "monthlyLimit": 15
          },
          {
            "label": "Peak",
            "input": 1.32,
            "output": 3.96,
            "cachedRead": 0.044,
            "monthlyLimit": 15
          }
        ],
        "requests5h": 1050,
        "requestsWeek": 2600,
        "requestsMonth": 5200,
        "unlimited": false,
        "mix": {
          "input": 750,
          "cached": 82000,
          "output": 290
        },
        "tokensPerRequest": 83040,
        "costPerRequest": 0.0028732,
        "limit5hUsd": 3,
        "tokensPer5h": 87192000
      },
      "efficiency": 1050,
      "efficiencyProvisional": false,
      "valueScore": 27.9,
      "reliability": 40.1,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Hy4 preview",
      "inGo": true,
      "goModelId": "hy4-preview",
      "inGoApi": true,
      "creator": "Tencent",
      "color": "#5CB9FF",
      "logo": null,
      "aaSlug": null,
      "aaName": null,
      "aaUrl": null,
      "aaMatch": null,
      "needsAaFix": true,
      "intelligence": null,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": null,
      "isReasoning": null,
      "isOpenWeights": null,
      "go": {
        "input": 0.834,
        "output": 2.501,
        "cachedRead": 0.042,
        "cachedWrite": null,
        "monthlyLimit": 30,
        "limitRaw": "$30",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 0.834,
            "output": 2.501,
            "cachedRead": 0.042,
            "monthlyLimit": 30
          }
        ],
        "requests5h": 1350,
        "requestsWeek": 3380,
        "requestsMonth": 6770,
        "unlimited": false,
        "mix": {
          "input": 830,
          "cached": 71500,
          "output": 295
        },
        "tokensPerRequest": 72625,
        "costPerRequest": 0.004433014999999999,
        "limit5hUsd": 6,
        "tokensPer5h": 98043750
      },
      "efficiency": 1350,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": null,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Hy3",
      "inGo": true,
      "goModelId": "hy3",
      "inGoApi": true,
      "creator": "Tencent",
      "color": "#5CB9FF",
      "logo": "https://artificialanalysis.ai/img/logos/tencent.svg",
      "aaSlug": "hy3",
      "aaName": "Hy3",
      "aaUrl": "https://artificialanalysis.ai/models/hy3",
      "aaMatch": "exact",
      "needsAaFix": false,
      "intelligence": null,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": 256000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 0.14,
        "output": 0.58,
        "cachedRead": 0.035,
        "cachedWrite": null,
        "monthlyLimit": 60,
        "limitRaw": "$60",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 0.14,
            "output": 0.58,
            "cachedRead": 0.035,
            "monthlyLimit": 60
          }
        ],
        "requests5h": 4300,
        "requestsWeek": 10750,
        "requestsMonth": 21500,
        "unlimited": false,
        "mix": {
          "input": 830,
          "cached": 71500,
          "output": 295
        },
        "tokensPerRequest": 72625,
        "costPerRequest": 0.0027898000000000003,
        "limit5hUsd": 12,
        "tokensPer5h": 312287500
      },
      "efficiency": 4300,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 14.7,
      "visual": 13.2,
      "visualParts": {
        "webdev": {
          "value": 1505.4337074624896,
          "rank": 64,
          "n": 6844
        }
      },
      "visualEye": 0.4,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Grok 4.7",
      "inGo": true,
      "goModelId": "grok-4.7",
      "inGoApi": true,
      "creator": "SpaceXAI",
      "color": "#736cd3",
      "logo": "https://artificialanalysis.ai/img/logos/spacexai.svg",
      "aaSlug": "grok-4-7-high",
      "aaName": "Grok 4.7 (High)",
      "aaUrl": "https://artificialanalysis.ai/models/grok-4-7-high",
      "aaMatch": "base",
      "needsAaFix": false,
      "intelligence": 35.0122962959703,
      "intelligenceEstimated": false,
      "costPerTask": 6.18359556537658,
      "contextWindow": 500000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": {
        "input": 2,
        "output": 6,
        "cachedRead": 0.5,
        "cachedWrite": null,
        "monthlyLimit": 15,
        "limitRaw": "$15",
        "limitNote": null,
        "tiers": [
          {
            "label": "≤ 200K tokens",
            "input": 2,
            "output": 6,
            "cachedRead": 0.5,
            "monthlyLimit": 15
          },
          {
            "label": "> 200K tokens",
            "input": 4,
            "output": 12,
            "cachedRead": 1,
            "monthlyLimit": 15
          }
        ],
        "requests5h": 169,
        "requestsWeek": 423,
        "requestsMonth": 845,
        "unlimited": false,
        "mix": {
          "input": 390,
          "cached": 32500,
          "output": 120
        },
        "tokensPerRequest": 33010,
        "costPerRequest": 0.01775,
        "limit5hUsd": 3,
        "tokensPer5h": 5578690
      },
      "efficiency": 169,
      "efficiencyProvisional": false,
      "valueScore": 20.7,
      "reliability": 48.2,
      "visual": 59.1,
      "visualParts": {
        "img2web": {
          "value": 1585.5228937193829,
          "rank": 20,
          "n": 1191
        },
        "webdev": {
          "value": 1637.4572057581888,
          "rank": 21,
          "n": 6572
        },
        "vision": {
          "value": 1230.957267472956,
          "rank": 79,
          "n": 3736
        }
      },
      "visualEye": 0.901,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "GPT 6 Luna",
      "inGo": true,
      "goModelId": "gpt-6-luna",
      "inGoApi": true,
      "creator": "OpenAI",
      "color": "#1f1f1f",
      "logo": "https://artificialanalysis.ai/img/logos/openai.svg",
      "aaSlug": "gpt-6-luna",
      "aaName": "GPT-6 Luna (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/gpt-6-luna",
      "aaMatch": "base",
      "needsAaFix": false,
      "intelligence": 27.7552004938153,
      "intelligenceEstimated": false,
      "costPerTask": 0.15195575732105837,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": {
        "input": 0.1,
        "output": 0.5,
        "cachedRead": 0.01,
        "cachedWrite": 0.125,
        "monthlyLimit": 15,
        "limitRaw": "$15",
        "limitNote": null,
        "tiers": [
          {
            "label": "≤ 272K tokens",
            "input": 0.1,
            "output": 0.5,
            "cachedRead": 0.01,
            "monthlyLimit": 15
          },
          {
            "label": "> 272K tokens",
            "input": 0.2,
            "output": 0.75,
            "cachedRead": 0.02,
            "monthlyLimit": 15
          }
        ],
        "requests5h": 4230,
        "requestsWeek": 10560,
        "requestsMonth": 21130,
        "unlimited": false,
        "mix": {
          "input": 1000,
          "cached": 50000,
          "output": 220
        },
        "tokensPerRequest": 51220,
        "costPerRequest": 0.00071,
        "limit5hUsd": 3,
        "tokensPer5h": 216660600
      },
      "efficiency": 4230,
      "efficiencyProvisional": false,
      "valueScore": 44.2,
      "reliability": 48.9,
      "visual": 50.1,
      "visualParts": {
        "img2web": {
          "value": 1571.1091362324723,
          "rank": 25,
          "n": 4439
        },
        "webdev": {
          "value": 1579.4041580064886,
          "rank": 41,
          "n": 27808
        },
        "vision": {
          "value": 1216.103808862197,
          "rank": 85,
          "n": 3662
        }
      },
      "visualEye": 0.885,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "GPT 5.6 Luna",
      "inGo": true,
      "goModelId": "gpt-5.6-luna",
      "inGoApi": true,
      "creator": "OpenAI",
      "color": "#1f1f1f",
      "logo": null,
      "aaSlug": null,
      "aaName": null,
      "aaUrl": null,
      "aaMatch": null,
      "needsAaFix": true,
      "intelligence": null,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": null,
      "isReasoning": null,
      "isOpenWeights": null,
      "go": {
        "input": 0.2,
        "output": 1.2,
        "cachedRead": 0.02,
        "cachedWrite": 0.25,
        "monthlyLimit": 15,
        "limitRaw": "$15",
        "limitNote": null,
        "tiers": [
          {
            "label": "≤ 272K tokens",
            "input": 0.2,
            "output": 1.2,
            "cachedRead": 0.02,
            "monthlyLimit": 15
          },
          {
            "label": "> 272K tokens",
            "input": 0.4,
            "output": 1.8,
            "cachedRead": 0.04,
            "monthlyLimit": 15
          }
        ],
        "requests5h": 2050,
        "requestsWeek": 5100,
        "requestsMonth": 10250,
        "unlimited": false,
        "mix": {
          "input": 1000,
          "cached": 50000,
          "output": 220
        },
        "tokensPerRequest": 51220,
        "costPerRequest": 0.001464,
        "limit5hUsd": 3,
        "tokensPer5h": 105001000
      },
      "efficiency": 2050,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": null,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Claude Haiku 5.5",
      "inGo": true,
      "goModelId": "claude-haiku-5-5",
      "inGoApi": true,
      "creator": "Anthropic",
      "color": "#cc785c",
      "logo": "https://artificialanalysis.ai/img/logos/anthropic.svg",
      "aaSlug": "claude-haiku-5-5",
      "aaName": "Claude Haiku 5.5 (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/claude-haiku-5-5",
      "aaMatch": "base",
      "needsAaFix": false,
      "intelligence": 36.2345435880142,
      "intelligenceEstimated": false,
      "costPerTask": 0.41100741536816304,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": {
        "input": 0.1,
        "output": 0.5,
        "cachedRead": 0.01,
        "cachedWrite": 0.125,
        "monthlyLimit": 15,
        "limitRaw": "$15",
        "limitNote": null,
        "tiers": [
          {
            "label": "≤ 100K tokens",
            "input": 0.1,
            "output": 0.5,
            "cachedRead": 0.01,
            "monthlyLimit": 15
          },
          {
            "label": "> 100K tokens",
            "input": 0.5,
            "output": 2.5,
            "cachedRead": 0.05,
            "monthlyLimit": 15
          }
        ],
        "requests5h": 3850,
        "requestsWeek": 9620,
        "requestsMonth": 19230,
        "unlimited": false,
        "mix": {
          "input": 1100,
          "cached": 55000,
          "output": 240
        },
        "tokensPerRequest": 56340,
        "costPerRequest": 0.00078,
        "limit5hUsd": 3,
        "tokensPer5h": 216909000
      },
      "efficiency": 3850,
      "efficiencyProvisional": false,
      "valueScore": 56.3,
      "reliability": 64.8,
      "visual": 23.6,
      "visualParts": {
        "webdev": {
          "value": 1588.8330617127986,
          "rank": 36,
          "n": 4758
        }
      },
      "visualEye": 0.4,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Gemini 4 Argon",
      "inGo": true,
      "goModelId": "gemini-4-argon",
      "inGoApi": true,
      "creator": "Google",
      "color": "#34A853",
      "logo": "https://artificialanalysis.ai/img/logos/google.svg",
      "aaSlug": "gemini-4-argon",
      "aaName": "Gemini 4 Argon (High)",
      "aaUrl": "https://artificialanalysis.ai/models/gemini-4-argon",
      "aaMatch": "base",
      "needsAaFix": false,
      "intelligence": 50.4121935905389,
      "intelligenceEstimated": false,
      "costPerTask": 7.682671372515551,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": {
        "input": null,
        "output": null,
        "cachedRead": null,
        "cachedWrite": null,
        "monthlyLimit": 30,
        "limitRaw": "$30",
        "limitNote": null,
        "tiers": [
          {
            "label": "50% off",
            "input": null,
            "output": null,
            "cachedRead": null,
            "monthlyLimit": 30
          }
        ],
        "requests5h": 440,
        "requestsWeek": 1080,
        "requestsMonth": 2120,
        "unlimited": false,
        "mix": null,
        "tokensPerRequest": null,
        "costPerRequest": 0.013636363636363636,
        "limit5hUsd": 6,
        "tokensPer5h": null
      },
      "efficiency": 440,
      "efficiencyProvisional": false,
      "valueScore": 46.3,
      "reliability": 91.4,
      "visual": 34.9,
      "visualParts": {
        "webdev": {
          "value": 1679.2118291253184,
          "rank": 11,
          "n": 3437
        }
      },
      "visualEye": 0.4,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Gemini 4 Carbon (High)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Google",
      "color": "#34A853",
      "logo": "https://artificialanalysis.ai/img/logos/google.svg",
      "aaSlug": "gemini-4-carbon",
      "aaName": "Gemini 4 Carbon (High)",
      "aaUrl": "https://artificialanalysis.ai/models/gemini-4-carbon",
      "intelligence": 59.425738829526,
      "intelligenceEstimated": false,
      "costPerTask": 7.755545745286556,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 100,
      "visual": 40,
      "visualParts": {
        "webdev": {
          "value": 1768.1522310766236,
          "rank": 4,
          "n": 2230
        }
      },
      "visualEye": 0.4,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Claude Opus 5.5 (Max)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Anthropic",
      "color": "#cc785c",
      "logo": "https://artificialanalysis.ai/img/logos/anthropic.svg",
      "aaSlug": "claude-opus-5-5",
      "aaName": "Claude Opus 5.5 (Max, Default Fallback)",
      "aaUrl": "https://artificialanalysis.ai/models/claude-opus-5-5",
      "intelligence": 58.4060336078904,
      "intelligenceEstimated": false,
      "costPerTask": 10.036409719512749,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 100,
      "visual": 100,
      "visualParts": {
        "img2web": {
          "value": 1752.570372559565,
          "rank": 1,
          "n": 781
        },
        "webdev": {
          "value": 1809.8391605525123,
          "rank": 1,
          "n": 3473
        },
        "vision": {
          "value": 1320.823800046,
          "rank": 2,
          "n": 3035
        }
      },
      "visualEye": 1.05,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "GPT-6 Astra (Max)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "OpenAI",
      "color": "#1f1f1f",
      "logo": "https://artificialanalysis.ai/img/logos/openai.svg",
      "aaSlug": "gpt-6-astra",
      "aaName": "GPT-6 Astra (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/gpt-6-astra",
      "intelligence": 56.8538559596797,
      "intelligenceEstimated": false,
      "costPerTask": 6.244666943602518,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 100,
      "visual": 100,
      "visualParts": {
        "img2web": {
          "value": 1726.2123270395787,
          "rank": 3,
          "n": 3181
        },
        "webdev": {
          "value": 1773.3545606290113,
          "rank": 2,
          "n": 7210
        },
        "vision": {
          "value": 1279.8986527925117,
          "rank": 36,
          "n": 4012
        }
      },
      "visualEye": 1.05,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "GPT-6.1 Sol (Max)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "OpenAI",
      "color": "#1f1f1f",
      "logo": "https://artificialanalysis.ai/img/logos/openai.svg",
      "aaSlug": "gpt-6-1-sol",
      "aaName": "GPT-6.1 Sol (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/gpt-6-1-sol",
      "intelligence": 54.5087338138148,
      "intelligenceEstimated": false,
      "costPerTask": 1.2720632679446995,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 99.1,
      "visual": 98.8,
      "visualParts": {
        "img2web": {
          "value": 1701.7353202057543,
          "rank": 5,
          "n": 1916
        },
        "webdev": {
          "value": 1750.568215754016,
          "rank": 5,
          "n": 4092
        },
        "vision": {
          "value": 1287.7313467775475,
          "rank": 29,
          "n": 2330
        }
      },
      "visualEye": 1.05,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Claude Sonnet 5.5 (Max)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Anthropic",
      "color": "#cc785c",
      "logo": "https://artificialanalysis.ai/img/logos/anthropic.svg",
      "aaSlug": "claude-sonnet-5-5",
      "aaName": "Claude Sonnet 5.5 (Max, Default Fallback)",
      "aaUrl": "https://artificialanalysis.ai/models/claude-sonnet-5-5",
      "intelligence": 54.24133407109,
      "intelligenceEstimated": false,
      "costPerTask": 10.020621343395753,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 98.6,
      "visual": 100,
      "visualParts": {
        "img2web": {
          "value": 1737.13977654562,
          "rank": 2,
          "n": 1551
        },
        "webdev": {
          "value": 1710.5864353676154,
          "rank": 8,
          "n": 6371
        },
        "vision": {
          "value": 1287.21834956692,
          "rank": 30,
          "n": 2564
        }
      },
      "visualEye": 1.05,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "GPT-6.1 Terra (Max)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "OpenAI",
      "color": "#1f1f1f",
      "logo": "https://artificialanalysis.ai/img/logos/openai.svg",
      "aaSlug": "gpt-6-1-terra",
      "aaName": "GPT-6.1 Terra (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/gpt-6-1-terra",
      "intelligence": 50.9765188577015,
      "intelligenceEstimated": false,
      "costPerTask": 0.961108031081634,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 92.5,
      "visual": 34.1,
      "visualParts": {
        "webdev": {
          "value": 1672.6547058209349,
          "rank": 14,
          "n": 1821
        }
      },
      "visualEye": 0.4,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Muse Wonder Full (Max)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Meta",
      "color": "#0089f4",
      "logo": "https://artificialanalysis.ai/img/logos/meta.svg",
      "aaSlug": "muse-wonder-full",
      "aaName": "Muse Wonder Full (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/muse-wonder-full",
      "intelligence": 49.7272123627021,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 90.1,
      "visual": 40,
      "visualParts": {
        "webdev": {
          "value": 1725.3158378428036,
          "rank": 7,
          "n": 2248
        }
      },
      "visualEye": 0.4,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Claude Fable 5.1 (Xhigh)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Anthropic",
      "color": "#cc785c",
      "logo": "https://artificialanalysis.ai/img/logos/anthropic.svg",
      "aaSlug": "claude-fable-5-1-xhigh",
      "aaName": "Claude Fable 5.1 (Xhigh, Default Fallback)",
      "aaUrl": "https://artificialanalysis.ai/models/claude-fable-5-1-xhigh",
      "intelligence": 49.6716384248632,
      "intelligenceEstimated": false,
      "costPerTask": 10.847474706140272,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 90,
      "visual": 100,
      "visualParts": {
        "img2web": {
          "value": 1722.2191243605344,
          "rank": 4,
          "n": 2907
        },
        "webdev": {
          "value": 1745.8518267992542,
          "rank": 6,
          "n": 8614
        },
        "vision": {
          "value": 1319.4899087995987,
          "rank": 4,
          "n": 5026
        }
      },
      "visualEye": 1.05,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Muse Wonder (Max)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Meta",
      "color": "#0089f4",
      "logo": "https://artificialanalysis.ai/img/logos/meta.svg",
      "aaSlug": "muse-wonder",
      "aaName": "Muse Wonder (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/muse-wonder",
      "intelligence": 43.3248225998431,
      "intelligenceEstimated": false,
      "costPerTask": 6.9520364786062245,
      "contextWindow": 1048576,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 78.1,
      "visual": 31.5,
      "visualParts": {
        "webdev": {
          "value": 1652.0939667524244,
          "rank": 20,
          "n": 3724
        }
      },
      "visualEye": 0.4,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "DeepSeek V4.1 Flash 1017",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "DeepSeek",
      "color": "#2243e6",
      "logo": "https://artificialanalysis.ai/img/logos/deepseek.svg",
      "aaSlug": "deepseek-v4-1-flash-1017",
      "aaName": "DeepSeek V4.1 Flash 1017 (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017",
      "intelligence": 32.4896393532027,
      "intelligenceEstimated": false,
      "costPerTask": 0.60210514783598,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 57.8,
      "visual": 33.1,
      "visualParts": {
        "webdev": {
          "value": 1665.040445245608,
          "rank": 16,
          "n": 7842
        }
      },
      "visualEye": 0.4,
      "aaMatch": "pinned",
      "needsAaFix": false,
      "freeInOc": true,
      "status": "not-in-go"
    },
    {
      "name": "Gemini 3.8 Flash (High)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Google",
      "color": "#34A853",
      "logo": "https://artificialanalysis.ai/img/logos/google.svg",
      "aaSlug": "gemini-3-8-flash",
      "aaName": "Gemini 3.8 Flash (High)",
      "aaUrl": "https://artificialanalysis.ai/models/gemini-3-8-flash",
      "intelligence": 30.5468119957291,
      "intelligenceEstimated": false,
      "costPerTask": 7.766006178152514,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 54.2,
      "visual": 74.3,
      "visualParts": {
        "img2web": {
          "value": 1592.7182186745918,
          "rank": 19,
          "n": 2516
        },
        "webdev": {
          "value": 1583.2994176433617,
          "rank": 37,
          "n": 12342
        },
        "vision": {
          "value": 1315.379362654793,
          "rank": 7,
          "n": 4645
        }
      },
      "visualEye": 1.05,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Ling 3.1 Flash 1019",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "InclusionAI",
      "color": "#4fb5ff",
      "logo": "https://artificialanalysis.ai/img/logos/inclusionai.jpg",
      "aaSlug": "ling-3-1-flash-1019",
      "aaName": "Ling 3.1 Flash 1019",
      "aaUrl": "https://artificialanalysis.ai/models/ling-3-1-flash-1019",
      "intelligence": 29.470119369837,
      "intelligenceEstimated": false,
      "costPerTask": 3.185145018337793,
      "contextWindow": 1048576,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 52.1,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Mistral Large 4 (High)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Mistral",
      "color": "#f32e02",
      "logo": "https://artificialanalysis.ai/img/logos/mistral.svg",
      "aaSlug": "mistral-large-4",
      "aaName": "Mistral Large 4 (High)",
      "aaUrl": "https://artificialanalysis.ai/models/mistral-large-4",
      "intelligence": 26.0249946754784,
      "intelligenceEstimated": false,
      "costPerTask": 2.061496607384404,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 45.7,
      "visual": 66.9,
      "visualParts": {
        "webdev": {
          "value": 1544.3103315032786,
          "rank": 48,
          "n": 4068
        },
        "vision": {
          "value": 1272.171620981572,
          "rank": 42,
          "n": 1008
        }
      },
      "visualEye": 1.05,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Muse Spark Open (Xhigh)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Meta",
      "color": "#0089f4",
      "logo": "https://artificialanalysis.ai/img/logos/meta.svg",
      "aaSlug": "muse-spark-open",
      "aaName": "Muse Spark Open (Xhigh)",
      "aaUrl": "https://artificialanalysis.ai/models/muse-spark-open",
      "intelligence": 24.6815868992913,
      "intelligenceEstimated": false,
      "costPerTask": 2.0176680435839316,
      "contextWindow": 1048576,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 43.2,
      "visual": 15.8,
      "visualParts": {
        "webdev": {
          "value": 1526.2373165722156,
          "rank": 55,
          "n": 1721
        }
      },
      "visualEye": 0.4,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Qwen3.8 27B (Xhigh)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Alibaba",
      "color": "#ff7018",
      "logo": "https://artificialanalysis.ai/img/logos/alibaba.svg",
      "aaSlug": "qwen3-8-27b",
      "aaName": "Qwen3.8 27B (Xhigh)",
      "aaUrl": "https://artificialanalysis.ai/models/qwen3-8-27b",
      "intelligence": 20.1068756031705,
      "intelligenceEstimated": false,
      "costPerTask": 3.5295494751410654,
      "contextWindow": 256000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 13.2,
      "visual": 67.6,
      "visualParts": {
        "img2web": {
          "value": 1577.4376341509046,
          "rank": 24,
          "n": 6418
        },
        "webdev": {
          "value": 1589.782268834193,
          "rank": 34,
          "n": 18752
        },
        "vision": {
          "value": 1269.463029799551,
          "rank": 44,
          "n": 7614
        }
      },
      "visualEye": 1.05,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "K2 Horizon 375B A23B",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Institute of Foundation Models",
      "color": "#1521a9",
      "logo": "https://artificialanalysis.ai/img/logos/ifm.svg",
      "aaSlug": "k2-horizon-375b-a23b",
      "aaName": "K2 Horizon 375B A23B",
      "aaUrl": "https://artificialanalysis.ai/models/k2-horizon-375b-a23b",
      "intelligence": 17.7702731734027,
      "intelligenceEstimated": false,
      "costPerTask": 0,
      "contextWindow": 524288,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 16.6,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Nemotron 3.5 Super VL",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "NVIDIA",
      "color": "#76b900",
      "logo": "https://artificialanalysis.ai/img/logos/nvidia.svg",
      "aaSlug": "nemotron-3-5-super-vl",
      "aaName": "Nemotron 3.5 Super VL",
      "aaUrl": "https://artificialanalysis.ai/models/nemotron-3-5-super-vl",
      "intelligence": 13.6203422723141,
      "intelligenceEstimated": false,
      "costPerTask": 0.5382257339551116,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 25,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Inkling Small",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Thinking Machines",
      "color": "#676767",
      "logo": "https://artificialanalysis.ai/img/logos/thinking-machines.svg",
      "aaSlug": "inkling-small",
      "aaName": "Inkling Small",
      "aaUrl": "https://artificialanalysis.ai/models/inkling-small",
      "intelligence": 12.9101620926084,
      "intelligenceEstimated": false,
      "costPerTask": 0.20316116043899832,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 25,
      "visual": 20.8,
      "visualParts": {
        "img2web": {
          "value": 1410.0181024237877,
          "rank": 58,
          "n": 1025
        },
        "webdev": {
          "value": 1409.1376517895078,
          "rank": 95,
          "n": 5295
        },
        "vision": {
          "value": 1236.796377631557,
          "rank": 75,
          "n": 8074
        }
      },
      "visualEye": 0.908,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Inkling (Xhigh)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Thinking Machines",
      "color": "#676767",
      "logo": "https://artificialanalysis.ai/img/logos/thinking-machines.svg",
      "aaSlug": "inkling",
      "aaName": "Inkling (Xhigh)",
      "aaUrl": "https://artificialanalysis.ai/models/inkling",
      "intelligence": 12.4781698715401,
      "intelligenceEstimated": false,
      "costPerTask": 1.3519575079737436,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 25,
      "visual": 1.9,
      "visualParts": {
        "webdev": {
          "value": 1415.192007852744,
          "rank": 94,
          "n": 17073
        }
      },
      "visualEye": 0.4,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Nemotron 3 Ultra 550B A55B (Reasoning)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "NVIDIA",
      "color": "#76b900",
      "logo": "https://artificialanalysis.ai/img/logos/nvidia.svg",
      "aaSlug": "nvidia-nemotron-3-ultra-550b-a55b",
      "aaName": "Nemotron 3 Ultra 550B A55B (Reasoning)",
      "aaUrl": "https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b",
      "intelligence": 11.7592726308177,
      "intelligenceEstimated": false,
      "costPerTask": 2.2257365504312134,
      "contextWindow": 262144,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 3.8,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Gemini 3.5 Flash-Lite",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Google",
      "color": "#34A853",
      "logo": "https://artificialanalysis.ai/img/logos/google.svg",
      "aaSlug": "gemini-3-5-flash-lite",
      "aaName": "Gemini 3.5 Flash-Lite",
      "aaUrl": "https://artificialanalysis.ai/models/gemini-3-5-flash-lite",
      "intelligence": 11.6563462044212,
      "intelligenceEstimated": false,
      "costPerTask": 0.6929018557975878,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 25,
      "visual": 35.2,
      "visualParts": {
        "img2web": {
          "value": 1447.7003955547596,
          "rank": 49,
          "n": 1603
        },
        "webdev": {
          "value": 1434.0835335612885,
          "rank": 90,
          "n": 236
        },
        "vision": {
          "value": 1269.067499973593,
          "rank": 45,
          "n": 9238
        }
      },
      "visualEye": 1.05,
      "aaMatch": "aa-direct",
      "needsAaFix": false,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Big Pickle",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "—",
      "color": "#8A8A93",
      "logo": null,
      "aaSlug": null,
      "aaName": null,
      "aaUrl": null,
      "intelligence": null,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": null,
      "isReasoning": null,
      "isOpenWeights": null,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": null,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "aaMatch": null,
      "needsAaFix": false,
      "freeInOc": true,
      "status": "free"
    },
    {
      "name": "Flint 40B",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "—",
      "color": "#8A8A93",
      "logo": null,
      "aaSlug": null,
      "aaName": null,
      "aaUrl": null,
      "intelligence": null,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": null,
      "isReasoning": null,
      "isOpenWeights": null,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": null,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "aaMatch": null,
      "needsAaFix": false,
      "freeInOc": true,
      "status": "free"
    },
    {
      "name": "Nemotron 3 Ultra",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "—",
      "color": "#8A8A93",
      "logo": null,
      "aaSlug": null,
      "aaName": null,
      "aaUrl": null,
      "intelligence": null,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": null,
      "isReasoning": null,
      "isOpenWeights": null,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": null,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "aaMatch": null,
      "needsAaFix": false,
      "freeInOc": true,
      "status": "free"
    },
    {
      "name": "Nemotron 3.5 Lightning",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "NVIDIA",
      "color": "#76b900",
      "logo": "https://artificialanalysis.ai/img/logos/nvidia.svg",
      "aaSlug": "nemotron-3-5-lightning",
      "aaName": "Nemotron 3.5 Lightning",
      "aaUrl": "https://artificialanalysis.ai/models/nemotron-3-5-lightning",
      "intelligence": 5.5346663903388,
      "intelligenceEstimated": false,
      "costPerTask": 0.28980699398265014,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 25,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "aaMatch": "exact",
      "needsAaFix": false,
      "freeInOc": true,
      "status": "free"
    },
    {
      "name": "Jev 1.13",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "—",
      "color": "#8A8A93",
      "logo": null,
      "aaSlug": null,
      "aaName": null,
      "aaUrl": null,
      "intelligence": null,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": null,
      "isReasoning": null,
      "isOpenWeights": null,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": null,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
      "aaMatch": null,
      "needsAaFix": false,
      "freeInOc": true,
      "status": "free"
    }
  ]
};
