/* Файл создан автоматически скриптом fetch-data.mjs.
   Ручные правки будут перезаписаны. Настройки — в models.config.js. */
window.AI_DATA = {
  "meta": {
    "generatedAt": "2026-11-17T03:22:15.013Z",
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
        "asOf": "2026-11-15"
      }
    },
    "counts": {
      "total": 42,
      "inGo": 34,
      "extraFromAA": 0,
      "freeOnly": 8,
      "unmatched": 13,
      "withoutIntelligence": 16,
      "withVisual": 17,
      "freeInOc": 2,
      "freeAvailable": 8,
      "needsAaFix": 26
    },
    "matchMethods": {
      "exact": 11,
      "base": 5,
      "fallback:override": 4,
      "canon": 1
    },
    "needsAaFix": [
      {
        "name": "GLM-5.3-Flash",
        "suggestions": []
      },
      {
        "name": "GLM-5.3",
        "suggestions": []
      },
      {
        "name": "GLM-5.2",
        "suggestions": []
      },
      {
        "name": "Kimi K3.1 Pro",
        "suggestions": []
      },
      {
        "name": "Kimi K3",
        "suggestions": []
      },
      {
        "name": "Kimi K2.7 Code",
        "suggestions": []
      },
      {
        "name": "LongCat-2.0",
        "suggestions": []
      },
      {
        "name": "Step 5 Preview",
        "suggestions": []
      },
      {
        "name": "MiMo-V2.6-Flash",
        "suggestions": []
      },
      {
        "name": "MiMo-V2.6-Pro",
        "suggestions": []
      },
      {
        "name": "MiMo-V2.5",
        "suggestions": []
      },
      {
        "name": "MiMo-V2.5-Pro",
        "suggestions": []
      },
      {
        "name": "MiniMax M3",
        "suggestions": []
      },
      {
        "name": "Muse Spark 1.3 Contributor",
        "suggestions": [
          {
            "name": "Muse Wonder (Max)",
            "score": 0.17
          }
        ]
      },
      {
        "name": "Muse Spark 1.2 Contributor",
        "suggestions": [
          {
            "name": "Muse Wonder (Max)",
            "score": 0.17
          }
        ]
      },
      {
        "name": "Qwen4 Max",
        "suggestions": [
          {
            "name": "Muse Wonder (Max)",
            "score": 0.25
          }
        ]
      },
      {
        "name": "Qwen3.8 Max",
        "suggestions": [
          {
            "name": "Muse Wonder (Max)",
            "score": 0.2
          }
        ]
      },
      {
        "name": "Qwen3.7 Plus",
        "suggestions": []
      },
      {
        "name": "Hy4",
        "suggestions": []
      },
      {
        "name": "Hy4 preview",
        "suggestions": []
      },
      {
        "name": "Hy3",
        "suggestions": []
      },
      {
        "name": "Grok 4.7",
        "suggestions": []
      },
      {
        "name": "GPT 6 Luna",
        "suggestions": []
      },
      {
        "name": "GPT 5.6 Luna",
        "suggestions": []
      },
      {
        "name": "Claude Haiku 5.5",
        "suggestions": []
      },
      {
        "name": "Gemini 4 Argon",
        "suggestions": []
      }
    ],
    "free": {
      "topN": 3,
      "top": [
        {
          "name": "DeepSeek V4.1 Flash Free",
          "base": "DeepSeek V4.1 Flash",
          "intelligence": 32.5896393532027,
          "aaSlug": "deepseek-v4-1-flash-1017"
        },
        {
          "name": "Inkling 2 Small Free",
          "base": "Inkling 2 Small",
          "intelligence": 30.6286781498958
        },
        {
          "name": "MiniMax M3.1 Flash Free",
          "base": "MiniMax M3.1 Flash",
          "intelligence": 29.0595214290458
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
      "aaSlug": null,
      "aaName": "GLM-5.3-Flash",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "exact",
      "needsAaFix": true,
      "intelligence": 27.803889160883,
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
      "valueScore": 46.6,
      "reliability": 49,
      "visual": 73.1,
      "visualParts": {
        "img2web": {
          "value": 1582.4525832675718,
          "rank": 24,
          "n": 8125
        },
        "webdev": {
          "value": 1609.106095262355,
          "rank": 37,
          "n": 23917
        },
        "vision": {
          "value": 1294.6970050128477,
          "rank": 24,
          "n": 31530
        }
      },
      "visualEye": 1.05,
      "freeInOc": false,
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
      "aaSlug": null,
      "aaName": "GLM-5.3 (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "base",
      "needsAaFix": true,
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
      "visual": 27.8,
      "visualParts": {
        "webdev": {
          "value": 1622.2656789436146,
          "rank": 31,
          "n": 12995
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
      "aaSlug": null,
      "aaName": "Kimi K3.1 Pro",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "exact",
      "needsAaFix": true,
      "intelligence": 46.4526236744189,
      "intelligenceEstimated": false,
      "costPerTask": 3.6812002895742055,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
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
      "valueScore": 22.3,
      "reliability": 84,
      "visual": 35.8,
      "visualParts": {
        "webdev": {
          "value": 1686.2251930517164,
          "rank": 13,
          "n": 5215
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
      "creator": "Kimi",
      "color": "#047AFE",
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
      "valueScore": null,
      "reliability": null,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
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
      "aaSlug": null,
      "aaName": "Kimi K2.7 Code",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "exact",
      "needsAaFix": true,
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
          "value": 1511.8308629486778,
          "rank": 42,
          "n": 903
        },
        "webdev": {
          "value": 1474.472206513007,
          "rank": 79,
          "n": 4879
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
      "aaSlug": null,
      "aaName": "LongCat 2.0",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "exact",
      "needsAaFix": true,
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
      "aaSlug": null,
      "aaName": "Step 5 Preview",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "exact",
      "needsAaFix": true,
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
      "visual": 55,
      "visualParts": {
        "img2web": {
          "value": 1551.390968134236,
          "rank": 30,
          "n": 4302
        },
        "webdev": {
          "value": 1571.752641636183,
          "rank": 48,
          "n": 7959
        },
        "vision": {
          "value": 1263.190951062395,
          "rank": 52,
          "n": 3523
        }
      },
      "visualEye": 0.937,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Beam Free",
      "inGo": true,
      "goModelId": "beam-free",
      "inGoApi": true,
      "creator": "—",
      "color": "#8A8A93",
      "logo": null,
      "aaSlug": "reflection-beam",
      "aaName": "Beam 1.0",
      "aaUrl": "https://artificialanalysis.ai/models/reflection-beam",
      "aaMatch": "fallback:override",
      "needsAaFix": false,
      "intelligence": 17.7307282547205,
      "intelligenceEstimated": false,
      "costPerTask": null,
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
      "name": "LongCat 2.5 Free",
      "inGo": true,
      "goModelId": "longcat-2.5-free",
      "inGoApi": true,
      "creator": "Meituan",
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
      "name": "Hy4 flash Free",
      "inGo": true,
      "goModelId": "hy4-flash-free",
      "inGoApi": true,
      "creator": "Tencent",
      "color": "#5CB9FF",
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
      "aaSlug": null,
      "aaName": "MiMo-V2.6-Flash",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "exact",
      "needsAaFix": true,
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
      "visual": 65.1,
      "visualParts": {
        "img2web": {
          "value": 1593.241474581923,
          "rank": 21,
          "n": 3437
        },
        "webdev": {
          "value": 1638.534308059064,
          "rank": 26,
          "n": 9239
        },
        "vision": {
          "value": 1259.559769384553,
          "rank": 56,
          "n": 6906
        }
      },
      "visualEye": 0.933,
      "freeInOc": false,
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
      "aaSlug": null,
      "aaName": "MiMo-V2.6-Pro",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "exact",
      "needsAaFix": true,
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
      "visual": 65.4,
      "visualParts": {
        "img2web": {
          "value": 1597.0692938525992,
          "rank": 19,
          "n": 3790
        },
        "webdev": {
          "value": 1623.8353645079155,
          "rank": 30,
          "n": 9234
        },
        "vision": {
          "value": 1265.8849206588607,
          "rank": 47,
          "n": 1826
        }
      },
      "visualEye": 0.94,
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
      "aaSlug": null,
      "aaName": "MiniMax-M3.1-Flash",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "exact",
      "needsAaFix": false,
      "intelligence": 29.0595214290458,
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
      "valueScore": 45.9,
      "reliability": 51.4,
      "visual": 22.8,
      "visualParts": {
        "webdev": {
          "value": 1582.0343291399042,
          "rank": 44,
          "n": 5182
        }
      },
      "visualEye": 0.4,
      "freeInOc": true,
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
      "aaSlug": null,
      "aaName": "MiniMax-M3",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "exact",
      "needsAaFix": true,
      "intelligence": 18.8789083859255,
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
      "valueScore": 23.5,
      "reliability": 32.3,
      "visual": 36.1,
      "visualParts": {
        "img2web": {
          "value": 1473.4800381077987,
          "rank": 48,
          "n": 6228
        },
        "webdev": {
          "value": 1484.0559016425682,
          "rank": 76,
          "n": 21031
        },
        "vision": {
          "value": 1249.1551057128574,
          "rank": 62,
          "n": 21159
        }
      },
      "visualEye": 0.921,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Muse Spark 1.3 Contributor",
      "inGo": true,
      "goModelId": "muse-spark-1.3-contributor",
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
      "name": "Qwen4 Max",
      "inGo": true,
      "goModelId": "qwen4-max",
      "inGoApi": true,
      "creator": "Alibaba",
      "color": "#ff7018",
      "logo": "https://artificialanalysis.ai/img/logos/alibaba.svg",
      "aaSlug": null,
      "aaName": "Qwen4 Max",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "exact",
      "needsAaFix": true,
      "intelligence": 42.8914543287565,
      "intelligenceEstimated": false,
      "costPerTask": 3.2681327300897323,
      "contextWindow": 983616,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": {
        "input": 1.5,
        "output": 4.5,
        "cachedRead": 0.075,
        "cachedWrite": 1.875,
        "monthlyLimit": 15,
        "limitRaw": "$15",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 1.5,
            "output": 4.5,
            "cachedRead": 0.075,
            "monthlyLimit": 15
          }
        ],
        "requests5h": 460,
        "requestsWeek": 1160,
        "requestsMonth": 2310,
        "unlimited": false,
        "mix": {
          "input": 420,
          "cached": 66000,
          "output": 200
        },
        "tokensPerRequest": 66620,
        "costPerRequest": 0.00648,
        "limit5hUsd": 3,
        "tokensPer5h": 30645200
      },
      "efficiency": 460,
      "efficiencyProvisional": false,
      "valueScore": 41.7,
      "reliability": 76.8,
      "visual": 36.7,
      "visualParts": {
        "img2web": {
          "value": 1673.5482260394501,
          "rank": 6,
          "n": 1474
        },
        "webdev": {
          "value": 1749.814651229602,
          "rank": 6,
          "n": 1814
        }
      },
      "visualEye": 0.4,
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
      "valueScore": null,
      "reliability": null,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
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
      "aaSlug": "qwen3-8-flash-next",
      "aaName": "Qwen3.8-Flash-Next",
      "aaUrl": "https://artificialanalysis.ai/models/qwen3-8-flash-next",
      "aaMatch": "fallback:override",
      "needsAaFix": false,
      "intelligence": 28.5750026655353,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": 256000,
      "isReasoning": true,
      "isOpenWeights": true,
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
      "valueScore": 47.1,
      "reliability": 29.1,
      "visual": 28.1,
      "visualParts": {
        "webdev": {
          "value": 1624.528279368876,
          "rank": 29,
          "n": 11671
        }
      },
      "visualEye": 0.4,
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
      "aaSlug": null,
      "aaName": "Qwen3.7 Plus",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "exact",
      "needsAaFix": true,
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
          "value": 1277.2546370300752,
          "rank": 39,
          "n": 15152
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
      "logo": null,
      "aaSlug": "deepseek-v4-1-flash-1017",
      "aaName": "DeepSeek V4.1 Flash 1017 (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017",
      "aaMatch": "fallback:override",
      "needsAaFix": false,
      "intelligence": 32.5896393532027,
      "intelligenceEstimated": false,
      "costPerTask": null,
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
      "valueScore": 66.1,
      "reliability": 58,
      "visual": 28.9,
      "visualParts": {
        "img2web": {
          "value": 1608.915041305481,
          "rank": 14,
          "n": 4164
        },
        "webdev": {
          "value": 1661.4090008988376,
          "rank": 19,
          "n": 15385
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
      "logo": null,
      "aaSlug": "deepseek-v4-pro",
      "aaName": "DeepSeek V4 Pro 0813 (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/deepseek-v4-pro",
      "aaMatch": "fallback:override",
      "needsAaFix": false,
      "intelligence": 23.0632981493003,
      "intelligenceEstimated": false,
      "costPerTask": null,
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
      "name": "Hy4",
      "inGo": true,
      "goModelId": "hy4",
      "inGoApi": true,
      "creator": "Tencent",
      "color": "#5CB9FF",
      "logo": "https://artificialanalysis.ai/img/logos/tencent-hy.svg",
      "aaSlug": null,
      "aaName": "Tencent Hy4",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "canon",
      "needsAaFix": true,
      "intelligence": 34.5552385392508,
      "intelligenceEstimated": false,
      "costPerTask": 1.0311060706397974,
      "contextWindow": 1048576,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": {
        "input": 0.834,
        "output": 2.501,
        "cachedRead": 0.042,
        "cachedWrite": null,
        "monthlyLimit": 60,
        "limitRaw": "$60",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 0.834,
            "output": 2.501,
            "cachedRead": 0.042,
            "monthlyLimit": 60
          }
        ],
        "requests5h": 2710,
        "requestsWeek": 6770,
        "requestsMonth": 13500,
        "unlimited": false,
        "mix": {
          "input": 830,
          "cached": 71500,
          "output": 295
        },
        "tokensPerRequest": 72625,
        "costPerRequest": 0.004433014999999999,
        "limit5hUsd": 12,
        "tokensPer5h": 196813750
      },
      "efficiency": 2710,
      "efficiencyProvisional": false,
      "valueScore": 51.4,
      "reliability": 61.7,
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
      "reliability": null,
      "visual": null,
      "visualParts": null,
      "visualEye": null,
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
      "aaSlug": null,
      "aaName": "Grok 4.7 (Xhigh)",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "base",
      "needsAaFix": true,
      "intelligence": 35.4850117067196,
      "intelligenceEstimated": false,
      "costPerTask": 7.771539401587139,
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
      "valueScore": 21,
      "reliability": 49.1,
      "visual": 59.4,
      "visualParts": {
        "img2web": {
          "value": 1587.695649387963,
          "rank": 22,
          "n": 2087
        },
        "webdev": {
          "value": 1640.0851740078472,
          "rank": 25,
          "n": 8488
        },
        "vision": {
          "value": 1230.0212125163798,
          "rank": 79,
          "n": 6181
        }
      },
      "visualEye": 0.9,
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
      "aaSlug": null,
      "aaName": "GPT-6 Luna (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "base",
      "needsAaFix": true,
      "intelligence": 27.8552004938153,
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
      "valueScore": 44.4,
      "reliability": 49.1,
      "visual": 48.6,
      "visualParts": {
        "img2web": {
          "value": 1566.8887547046586,
          "rank": 27,
          "n": 7715
        },
        "webdev": {
          "value": 1576.631492574981,
          "rank": 47,
          "n": 31066
        },
        "vision": {
          "value": 1211.1836426875775,
          "rank": 88,
          "n": 6202
        }
      },
      "visualEye": 0.879,
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
      "aaSlug": null,
      "aaName": "Claude Haiku 5.5 (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "base",
      "needsAaFix": true,
      "intelligence": 36.4845435880142,
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
      "valueScore": 56.7,
      "reliability": 65.3,
      "visual": 24.2,
      "visualParts": {
        "webdev": {
          "value": 1593.2157732209616,
          "rank": 40,
          "n": 7147
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
      "aaSlug": null,
      "aaName": "Gemini 4 Argon (High)",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "aaMatch": "base",
      "needsAaFix": true,
      "intelligence": 50.4121935905389,
      "intelligenceEstimated": false,
      "costPerTask": 4.973304355775267,
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
          "value": 1679.1201066237227,
          "rank": 15,
          "n": 5231
        }
      },
      "visualEye": 0.4,
      "freeInOc": false,
      "status": "active"
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
      "name": "Iceman",
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
      "name": "Inkling 2 Small",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Thinking Machines",
      "color": "#676767",
      "logo": "https://artificialanalysis.ai/img/logos/thinking-machines.svg",
      "aaSlug": null,
      "aaName": "Inkling 2 Small",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "intelligence": 30.6286781498958,
      "intelligenceEstimated": false,
      "costPerTask": 1.1784281349617984,
      "contextWindow": 1024000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 54.3,
      "visual": 30.6,
      "visualParts": {
        "webdev": {
          "value": 1644.6760395957338,
          "rank": 24,
          "n": 1077
        }
      },
      "visualEye": 0.4,
      "aaMatch": "exact",
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
      "aaSlug": null,
      "aaName": "Nemotron 3.5 Lightning",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "intelligence": 5.5346663903388,
      "intelligenceEstimated": false,
      "costPerTask": 0.31445225066768195,
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
      "name": "Nemotron 3.5 Super VL",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "NVIDIA",
      "color": "#76b900",
      "logo": "https://artificialanalysis.ai/img/logos/nvidia.svg",
      "aaSlug": null,
      "aaName": "Nemotron 3.5 Super VL",
      "aaUrl": "https://artificialanalysis.ai/models/undefined",
      "intelligence": 13.6203422723141,
      "intelligenceEstimated": false,
      "costPerTask": 0.5574566144919201,
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
