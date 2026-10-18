/* Файл создан автоматически скриптом fetch-data.mjs.
   Ручные правки будут перезаписаны. Настройки — в models.config.js. */
window.AI_DATA = {
  "meta": {
    "generatedAt": "2026-10-18T22:43:01.169Z",
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
        "asOf": "2026-10-16"
      }
    },
    "counts": {
      "total": 49,
      "inGo": 29,
      "extraFromAA": 20,
      "unmatched": 9,
      "withoutIntelligence": 9,
      "withVisual": 28,
      "withAesthetics": 28,
      "freeInOc": 3,
      "freeAvailable": 6
    },
    "free": {
      "topN": 3,
      "top": [
        {
          "name": "GLM-5.3-Flash Free",
          "base": "GLM-5.3-Flash",
          "intelligence": 41.807466113455,
          "aaSlug": "glm-5-3-flash"
        },
        {
          "name": "DeepSeek V4.1 Flash Free",
          "base": "DeepSeek V4.1 Flash",
          "intelligence": 39.456167472527,
          "aaSlug": "deepseek-v4-1-flash"
        },
        {
          "name": "MiMo-V2.6-Flash Free",
          "base": "MiMo-V2.6-Flash",
          "intelligence": 37.8843590141754,
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
      "intelligence": "Artificial Analysis Intelligence Index v4.3.2 — сводный балл по 10 независимым тестам: знания, математика, код, агентные задачи, следование инструкциям. Показывает, насколько модель умна; цены и скорость в него не входят. Входит в расчёт «Надёжности» и «OpenCode Go Эффективности». Выше — лучше.",
      "reliability": "Совокупный показатель того, насколько модель хорошо справляется с большими и сложными задачами, не галлюцинирует и хорошо проверяет себя и других агентов. Собран из данных Artificial Analysis: сила модели, реальные задачи, отсутствие галлюцинаций, объём контекста и диагностика сбоев. Выше — лучше.",
      "visual": "Насколько модель в целом хорошо работает с визуалом: смотрит скриншоты, понимает, что такое красиво, собирает UI/UX. Собран из арен LMArena, где люди сравнивают работы моделей попарно: повтор по скриншотам image_to_webdev (вес 40%), общее качество UI webdev overall (30%) и зрение vision overall (30%). Это голоса людей, а не измерение красоты: у Artificial Analysis бенчмарков про дизайн, UI и зрение в Intelligence Index нет. Балла нет без верстки; зрение уточняет балл, когда оно измерено (арены отстают от релизов). Состав балла виден в подсказке строки. Выше — лучше. 2D приоритетно, 3D отдельным сигналом не меряем.",
      "aesthetics": "Насколько модель в целом хорошо работает с визуалом: смотрит скриншоты, понимает, что такое красиво, собирает UI/UX. Собран из арен LMArena, где люди сравнивают работы моделей попарно: повтор по скриншотам image_to_webdev (вес 40%), общее качество UI webdev overall (30%) и зрение vision overall (30%). Это голоса людей, а не измерение красоты: у Artificial Analysis бенчмарков про дизайн, UI и зрение в Intelligence Index нет. Балла нет без верстки; зрение уточняет балл, когда оно измерено (арены отстают от релизов). Состав балла виден в подсказке строки. Выше — лучше. 2D приоритетно, 3D отдельным сигналом не меряем.",
      "costPerTask": "Artificial Analysis: средняя стоимость одной задачи Intelligence Index по прайсу провайдера, в USD. Это не цена подписки Go. Ниже — лучше.",
      "efficiency": "Показатель учитывающий то насколько модель имеет высокий интеллект и при этом как много лимитов под неё выделяет подписка OpenCode Go. Чем выше показатель — тем целесообразнее использовать модель для постоянной работы.",
      "free": "Помимо подписки OpenCode Go часть моделей доступна бесплатно, без подписки. Самые умные из них по Artificial Analysis — GLM-5.3-Flash Free, DeepSeek V4.1 Flash Free, MiMo-V2.6-Flash Free — отмечены в списке зелёным бейджем «Free». Показатель OpenCode Go Эффективность у этих строк считается по лимитам подписки Go."
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
      "intelligence": 41.807466113455,
      "intelligenceEstimated": false,
      "costPerTask": 0.2835948232103717,
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
      "valueScore": 67.4,
      "reliability": 75.7,
      "visual": 69.2,
      "visualParts": {
        "img2web": {
          "value": 1580.658477049375,
          "rank": 20,
          "n": 4315
        },
        "webdev": {
          "value": 1605.474108583022,
          "rank": 27,
          "n": 17579
        },
        "vision": {
          "value": 1296.0254962766658,
          "rank": 23,
          "n": 11157
        }
      },
      "aesthetics": 69.2,
      "aestheticsParts": {
        "img2web": {
          "value": 1580.658477049375,
          "rank": 20,
          "n": 4315
        },
        "webdev": {
          "value": 1605.474108583022,
          "rank": 27,
          "n": 17579
        },
        "vision": {
          "value": 1296.0254962766658,
          "rank": 23,
          "n": 11157
        }
      },
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
      "intelligence": 44.777392385614,
      "intelligenceEstimated": false,
      "costPerTask": 2.0056375150449584,
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
      "valueScore": 31,
      "reliability": 74.9,
      "visual": 69.1,
      "visualParts": {
        "webdev": {
          "value": 1621.1409439450072,
          "rank": 23,
          "n": 9542
        }
      },
      "aesthetics": 69.1,
      "aestheticsParts": {
        "webdev": {
          "value": 1621.1409439450072,
          "rank": 23,
          "n": 9542
        }
      },
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
      "aesthetics": null,
      "aestheticsParts": null,
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
      "logo": "https://artificialanalysis.ai/img/logos/kimi.jpg",
      "aaSlug": "kimi-k3",
      "aaName": "Kimi K3 (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/kimi-k3",
      "intelligence": 43.5938229518782,
      "intelligenceEstimated": false,
      "costPerTask": 2.0001323004425493,
      "contextWindow": 1048576,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 3,
        "output": 15,
        "cachedRead": 0.3,
        "cachedWrite": null,
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
      "valueScore": 10.6,
      "reliability": 66.6,
      "visual": 66.2,
      "visualParts": {
        "img2web": {
          "value": 1579.1654480337347,
          "rank": 21,
          "n": 3504
        },
        "webdev": {
          "value": 1655.2114268717892,
          "rank": 14,
          "n": 19220
        }
      },
      "aesthetics": 66.2,
      "aestheticsParts": {
        "img2web": {
          "value": 1579.1654480337347,
          "rank": 21,
          "n": 3504
        },
        "webdev": {
          "value": 1655.2114268717892,
          "rank": 14,
          "n": 19220
        }
      },
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
      "intelligence": 25.8121062401836,
      "intelligenceEstimated": false,
      "costPerTask": 0.541190247118529,
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
      "valueScore": 33.9,
      "reliability": 24.4,
      "visual": 30.1,
      "visualParts": {
        "img2web": {
          "value": 1513.0404947426737,
          "rank": 40,
          "n": 921
        },
        "webdev": {
          "value": 1473.7697274981233,
          "rank": 66,
          "n": 4966
        }
      },
      "aesthetics": 30.1,
      "aestheticsParts": {
        "img2web": {
          "value": 1513.0404947426737,
          "rank": 40,
          "n": 921
        },
        "webdev": {
          "value": 1473.7697274981233,
          "rank": 66,
          "n": 4966
        }
      },
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
      "intelligence": 19.1123256610623,
      "intelligenceEstimated": false,
      "costPerTask": 0.14624850952440743,
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
      "valueScore": 28.2,
      "reliability": 28,
      "visual": null,
      "visualParts": null,
      "aesthetics": null,
      "aestheticsParts": null,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "LongCat 2.5 Preview Free",
      "inGo": true,
      "goModelId": "longcat-2.5-preview-free",
      "inGoApi": true,
      "creator": "Meituan",
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
      "aesthetics": null,
      "aestheticsParts": null,
      "freeInOc": false,
      "status": "unlimited"
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
      "intelligence": 43.7343049141614,
      "intelligenceEstimated": false,
      "costPerTask": 1.0264068637684054,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 1,
        "output": 2.7,
        "cachedRead": 0.1,
        "cachedWrite": null,
        "monthlyLimit": 60,
        "limitRaw": "$60",
        "limitNote": "4x · Limited time",
        "tiers": [
          {
            "label": null,
            "input": 1,
            "output": 2.7,
            "cachedRead": 0.1,
            "monthlyLimit": 60
          }
        ],
        "requests5h": 1720,
        "requestsWeek": 4280,
        "requestsMonth": 8520,
        "unlimited": false,
        "mix": {
          "input": 1000,
          "cached": 55000,
          "output": 200
        },
        "tokensPerRequest": 56200,
        "costPerRequest": 0.00704,
        "limit5hUsd": 12,
        "tokensPer5h": 96664000
      },
      "efficiency": 1720,
      "efficiencyProvisional": false,
      "valueScore": 57.8,
      "reliability": 74.3,
      "visual": 57.3,
      "visualParts": {
        "img2web": {
          "value": 1541.171304872044,
          "rank": 30,
          "n": 1880
        },
        "webdev": {
          "value": 1564.981259391035,
          "rank": 36,
          "n": 4424
        },
        "vision": {
          "value": 1267.4200834554836,
          "rank": 47,
          "n": 1088
        }
      },
      "aesthetics": 57.3,
      "aestheticsParts": {
        "img2web": {
          "value": 1541.171304872044,
          "rank": 30,
          "n": 1880
        },
        "webdev": {
          "value": 1564.981259391035,
          "rank": 36,
          "n": 4424
        },
        "vision": {
          "value": 1267.4200834554836,
          "rank": 47,
          "n": 1088
        }
      },
      "freeInOc": false,
      "status": "promo-4x"
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
      "intelligence": 30.3334426348039,
      "intelligenceEstimated": false,
      "costPerTask": 0.5657163841991104,
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
      "valueScore": 61.9,
      "reliability": 52.3,
      "visual": null,
      "visualParts": null,
      "aesthetics": null,
      "aestheticsParts": null,
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
      "intelligence": 37.8843590141754,
      "intelligenceEstimated": false,
      "costPerTask": 0.06237567475410205,
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
      "valueScore": 73.1,
      "reliability": 63.8,
      "visual": 69.8,
      "visualParts": {
        "img2web": {
          "value": 1596.746487125431,
          "rank": 17,
          "n": 1930
        },
        "webdev": {
          "value": 1634.2780091461036,
          "rank": 17,
          "n": 5016
        },
        "vision": {
          "value": 1259.2283364806044,
          "rank": 56,
          "n": 2908
        }
      },
      "aesthetics": 69.8,
      "aestheticsParts": {
        "img2web": {
          "value": 1596.746487125431,
          "rank": 17,
          "n": 1930
        },
        "webdev": {
          "value": 1634.2780091461036,
          "rank": 17,
          "n": 5016
        },
        "vision": {
          "value": 1259.2283364806044,
          "rank": 56,
          "n": 2908
        }
      },
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
      "intelligence": 46.3242065310383,
      "intelligenceEstimated": false,
      "costPerTask": 0.13322318937213493,
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
      "valueScore": 66.8,
      "reliability": 77,
      "visual": 69.2,
      "visualParts": {
        "img2web": {
          "value": 1594.9631947586013,
          "rank": 18,
          "n": 2199
        },
        "webdev": {
          "value": 1624.8152158959037,
          "rank": 20,
          "n": 4763
        },
        "vision": {
          "value": 1264.0437391212997,
          "rank": 50,
          "n": 1778
        }
      },
      "aesthetics": 69.2,
      "aestheticsParts": {
        "img2web": {
          "value": 1594.9631947586013,
          "rank": 18,
          "n": 2199
        },
        "webdev": {
          "value": 1624.8152158959037,
          "rank": 20,
          "n": 4763
        },
        "vision": {
          "value": 1264.0437391212997,
          "rank": 50,
          "n": 1778
        }
      },
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "MiMo-V2.5",
      "inGo": true,
      "goModelId": "mimo-v2.5",
      "inGoApi": true,
      "creator": "Xiaomi",
      "color": "#ff6900",
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
      "aesthetics": null,
      "aestheticsParts": null,
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "MiMo-V2.5-Pro",
      "inGo": true,
      "goModelId": "mimo-v2.5-pro",
      "inGoApi": true,
      "creator": "Xiaomi",
      "color": "#ff6900",
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
      "aesthetics": null,
      "aestheticsParts": null,
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
      "intelligence": 29.2202932236316,
      "intelligenceEstimated": false,
      "costPerTask": 0.5076126905781733,
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
            "label": null,
            "input": 0.3,
            "output": 1.2,
            "cachedRead": 0.06,
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
      "valueScore": 44.9,
      "reliability": 61.8,
      "visual": 39.4,
      "visualParts": {
        "img2web": {
          "value": 1472.6329134742518,
          "rank": 46,
          "n": 5514
        },
        "webdev": {
          "value": 1482.450057987971,
          "rank": 64,
          "n": 19499
        },
        "vision": {
          "value": 1253.1100912254556,
          "rank": 60,
          "n": 19026
        }
      },
      "aesthetics": 39.4,
      "aestheticsParts": {
        "img2web": {
          "value": 1472.6329134742518,
          "rank": 46,
          "n": 5514
        },
        "webdev": {
          "value": 1482.450057987971,
          "rank": 64,
          "n": 19499
        },
        "vision": {
          "value": 1253.1100912254556,
          "rank": 60,
          "n": 19026
        }
      },
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
      "logo": "https://artificialanalysis.ai/img/logos/meta.svg",
      "aaSlug": "muse-spark-1-3",
      "aaName": "Muse Spark 1.3 (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/muse-spark-1-3",
      "intelligence": 48.0923107719685,
      "intelligenceEstimated": false,
      "costPerTask": 1.6048932100125866,
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
      "valueScore": 91,
      "reliability": 70.5,
      "visual": 83.3,
      "visualParts": {
        "img2web": {
          "value": 1641.977183595533,
          "rank": 8,
          "n": 4688
        },
        "webdev": {
          "value": 1658.4236652176892,
          "rank": 12,
          "n": 9068
        },
        "vision": {
          "value": 1309.3498415967074,
          "rank": 13,
          "n": 4550
        }
      },
      "aesthetics": 83.3,
      "aestheticsParts": {
        "img2web": {
          "value": 1641.977183595533,
          "rank": 8,
          "n": 4688
        },
        "webdev": {
          "value": 1658.4236652176892,
          "rank": 12,
          "n": 9068
        },
        "vision": {
          "value": 1309.3498415967074,
          "rank": 13,
          "n": 4550
        }
      },
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
      "aesthetics": null,
      "aestheticsParts": null,
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
      "intelligence": 45.4152084980521,
      "intelligenceEstimated": false,
      "costPerTask": 5.408509428374016,
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
      "valueScore": 24.2,
      "reliability": 72.7,
      "visual": 84.7,
      "visualParts": {
        "img2web": {
          "value": 1637.890849899371,
          "rank": 9,
          "n": 1164
        },
        "webdev": {
          "value": 1673.598504927179,
          "rank": 10,
          "n": 13812
        },
        "vision": {
          "value": 1313.5990241962058,
          "rank": 9,
          "n": 10017
        }
      },
      "aesthetics": 84.7,
      "aestheticsParts": {
        "img2web": {
          "value": 1637.890849899371,
          "rank": 9,
          "n": 1164
        },
        "webdev": {
          "value": 1673.598504927179,
          "rank": 10,
          "n": 13812
        },
        "vision": {
          "value": 1313.5990241962058,
          "rank": 9,
          "n": 10017
        }
      },
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
      "aesthetics": null,
      "aestheticsParts": null,
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
      "intelligence": 25.1622215821984,
      "intelligenceEstimated": false,
      "costPerTask": 0.21702592259078568,
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
      "valueScore": 39.5,
      "reliability": 47.2,
      "visual": null,
      "visualParts": {
        "vision": {
          "value": 1279.0703715219638,
          "rank": 37,
          "n": 13636
        }
      },
      "aesthetics": null,
      "aestheticsParts": {
        "vision": {
          "value": 1279.0703715219638,
          "rank": 37,
          "n": 13636
        }
      },
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
      "aaSlug": "deepseek-v4-1-flash",
      "aaName": "DeepSeek V4.1 Flash (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/deepseek-v4-1-flash",
      "intelligence": 39.456167472527,
      "intelligenceEstimated": false,
      "costPerTask": 0.485662249576018,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": {
        "input": 0.15,
        "output": 0.6,
        "cachedRead": 0.003,
        "cachedWrite": null,
        "monthlyLimit": 80,
        "limitRaw": "$80",
        "limitNote": null,
        "tiers": [
          {
            "label": "Off-Peak",
            "input": 0.15,
            "output": 0.6,
            "cachedRead": 0.003,
            "monthlyLimit": 80
          },
          {
            "label": "Peak",
            "input": 0.3,
            "output": 1.2,
            "cachedRead": 0.006,
            "monthlyLimit": 80
          }
        ],
        "requests5h": 34670,
        "requestsWeek": 86670,
        "requestsMonth": 173330,
        "unlimited": false,
        "mix": {
          "input": 410,
          "cached": 71300,
          "output": 310
        },
        "tokensPerRequest": 72020,
        "costPerRequest": 0.0004614,
        "limit5hUsd": 16,
        "tokensPer5h": 2496933400
      },
      "efficiency": 34670,
      "efficiencyProvisional": false,
      "valueScore": 76.5,
      "reliability": 52.1,
      "visual": 71.8,
      "visualParts": {
        "img2web": {
          "value": 1608.867298267899,
          "rank": 12,
          "n": 766
        },
        "webdev": {
          "value": 1618.412357403753,
          "rank": 24,
          "n": 3540
        },
        "vision": {
          "value": 1276.6353190733412,
          "rank": 39,
          "n": 3559
        }
      },
      "aesthetics": 71.8,
      "aestheticsParts": {
        "img2web": {
          "value": 1608.867298267899,
          "rank": 12,
          "n": 766
        },
        "webdev": {
          "value": 1618.412357403753,
          "rank": 24,
          "n": 3540
        },
        "vision": {
          "value": 1276.6353190733412,
          "rank": 39,
          "n": 3559
        }
      },
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
      "intelligence": 35.9967791278402,
      "intelligenceEstimated": false,
      "costPerTask": 0.6740219040435134,
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
      "valueScore": 44.9,
      "reliability": 46.3,
      "visual": null,
      "visualParts": null,
      "aesthetics": null,
      "aestheticsParts": null,
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
      "aesthetics": null,
      "aestheticsParts": null,
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
      "intelligence": 25.2972775731571,
      "intelligenceEstimated": false,
      "costPerTask": 0.07179763081859954,
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
      "valueScore": 39.8,
      "reliability": 27.1,
      "visual": 33.1,
      "visualParts": {
        "webdev": {
          "value": 1505.9107483086677,
          "rank": 58,
          "n": 6168
        }
      },
      "aesthetics": 33.1,
      "aestheticsParts": {
        "webdev": {
          "value": 1505.9107483086677,
          "rank": 58,
          "n": 6168
        }
      },
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Space Bunny",
      "inGo": true,
      "goModelId": "space-bunny",
      "inGoApi": true,
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
      "go": {
        "input": 0.15,
        "output": 0.6,
        "cachedRead": 0.03,
        "cachedWrite": null,
        "monthlyLimit": 30,
        "limitRaw": "$30",
        "limitNote": null,
        "tiers": [
          {
            "label": null,
            "input": 0.15,
            "output": 0.6,
            "cachedRead": 0.03,
            "monthlyLimit": 30
          }
        ],
        "requests5h": 3130,
        "requestsWeek": 7810,
        "requestsMonth": 15630,
        "unlimited": false,
        "mix": {
          "input": 1000,
          "cached": 55000,
          "output": 200
        },
        "tokensPerRequest": 56200,
        "costPerRequest": 0.00192,
        "limit5hUsd": 6,
        "tokensPer5h": 175906000
      },
      "efficiency": 3130,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": null,
      "visual": null,
      "visualParts": null,
      "aesthetics": null,
      "aestheticsParts": null,
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
      "aaSlug": "grok-4-7",
      "aaName": "Grok 4.7 (Xhigh)",
      "aaUrl": "https://artificialanalysis.ai/models/grok-4-7",
      "intelligence": 46.4465506302286,
      "intelligenceEstimated": false,
      "costPerTask": 3.738325952106939,
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
      "valueScore": 26,
      "reliability": 69.4,
      "visual": 64.3,
      "visualParts": {
        "img2web": {
          "value": 1577.336260584801,
          "rank": 23,
          "n": 796
        },
        "webdev": {
          "value": 1638.6701748611626,
          "rank": 16,
          "n": 5021
        },
        "vision": {
          "value": 1227.972376028224,
          "rank": 80,
          "n": 2942
        }
      },
      "aesthetics": 64.3,
      "aestheticsParts": {
        "img2web": {
          "value": 1577.336260584801,
          "rank": 23,
          "n": 796
        },
        "webdev": {
          "value": 1638.6701748611626,
          "rank": 16,
          "n": 5021
        },
        "vision": {
          "value": 1227.972376028224,
          "rank": 80,
          "n": 2942
        }
      },
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
      "intelligence": 38.1245186869738,
      "intelligenceEstimated": false,
      "costPerTask": 0.06782295669812205,
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
      "valueScore": 59.5,
      "reliability": 53.8,
      "visual": 56.5,
      "visualParts": {
        "img2web": {
          "value": 1570.160993942166,
          "rank": 25,
          "n": 3000
        },
        "webdev": {
          "value": 1578.160478866449,
          "rank": 35,
          "n": 20045
        },
        "vision": {
          "value": 1216.887891804328,
          "rank": 84,
          "n": 2833
        }
      },
      "aesthetics": 56.5,
      "aestheticsParts": {
        "img2web": {
          "value": 1570.160993942166,
          "rank": 25,
          "n": 3000
        },
        "webdev": {
          "value": 1578.160478866449,
          "rank": 35,
          "n": 20045
        },
        "vision": {
          "value": 1216.887891804328,
          "rank": 84,
          "n": 2833
        }
      },
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
      "aesthetics": null,
      "aestheticsParts": null,
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
      "intelligence": 43.3950199670746,
      "intelligenceEstimated": false,
      "costPerTask": 0.21276971216992022,
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
      "valueScore": 65.1,
      "reliability": 73.4,
      "visual": 57.7,
      "visualParts": {
        "webdev": {
          "value": 1584.698340531561,
          "rank": 32,
          "n": 3156
        }
      },
      "aesthetics": 57.7,
      "aestheticsParts": {
        "webdev": {
          "value": 1584.698340531561,
          "rank": 32,
          "n": 3156
        }
      },
      "freeInOc": false,
      "status": "active"
    },
    {
      "name": "Gemini 4 Argon Contributor",
      "inGo": true,
      "goModelId": "gemini-4-argon-contributor",
      "inGoApi": true,
      "creator": "Google",
      "color": "#34A853",
      "logo": "https://artificialanalysis.ai/img/logos/google.svg",
      "aaSlug": "gemini-4-argon",
      "aaName": "Gemini 4 Argon (High)",
      "aaUrl": "https://artificialanalysis.ai/models/gemini-4-argon",
      "intelligence": 52.5605655745982,
      "intelligenceEstimated": false,
      "costPerTask": 1.990322379299008,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": {
        "input": 4,
        "output": 20,
        "cachedRead": 0.2,
        "cachedWrite": null,
        "monthlyLimit": 60,
        "limitRaw": "$60",
        "limitNote": "2x · Limited time",
        "tiers": [
          {
            "label": null,
            "input": 4,
            "output": 20,
            "cachedRead": 0.2,
            "monthlyLimit": 60
          }
        ],
        "requests5h": 440,
        "requestsWeek": 1080,
        "requestsMonth": 2120,
        "unlimited": false,
        "mix": null,
        "tokensPerRequest": null,
        "costPerRequest": 0.02727272727272727,
        "limit5hUsd": 12,
        "tokensPer5h": null
      },
      "efficiency": 440,
      "efficiencyProvisional": false,
      "valueScore": 47.7,
      "reliability": 89.9,
      "visual": 86.9,
      "visualParts": {
        "webdev": {
          "value": 1678.1872513416483,
          "rank": 9,
          "n": 1775
        }
      },
      "aesthetics": 86.9,
      "aestheticsParts": {
        "webdev": {
          "value": 1678.1872513416483,
          "rank": 9,
          "n": 1775
        }
      },
      "freeInOc": false,
      "status": "promo-2x"
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
      "intelligence": 57.6223698102963,
      "intelligenceEstimated": false,
      "costPerTask": 5.982012019521066,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 73.7,
      "visual": 100,
      "visualParts": {
        "img2web": {
          "value": 1748.5106138462124,
          "rank": 1,
          "n": 493
        },
        "webdev": {
          "value": 1807.3090427323077,
          "rank": 1,
          "n": 2775
        },
        "vision": {
          "value": 1320.5355101775008,
          "rank": 2,
          "n": 2508
        }
      },
      "aesthetics": 100,
      "aestheticsParts": {
        "img2web": {
          "value": 1748.5106138462124,
          "rank": 1,
          "n": 493
        },
        "webdev": {
          "value": 1807.3090427323077,
          "rank": 1,
          "n": 2775
        },
        "vision": {
          "value": 1320.5355101775008,
          "rank": 2,
          "n": 2508
        }
      },
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
      "intelligence": 56.0001286580794,
      "intelligenceEstimated": false,
      "costPerTask": 5.4608525948098325,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 85.2,
      "visual": 95.7,
      "visualParts": {
        "img2web": {
          "value": 1740.047478213904,
          "rank": 2,
          "n": 1074
        },
        "webdev": {
          "value": 1710.9791303311154,
          "rank": 6,
          "n": 4914
        },
        "vision": {
          "value": 1288.576910862408,
          "rank": 28,
          "n": 2068
        }
      },
      "aesthetics": 95.7,
      "aestheticsParts": {
        "img2web": {
          "value": 1740.047478213904,
          "rank": 2,
          "n": 1074
        },
        "webdev": {
          "value": 1710.9791303311154,
          "rank": 6,
          "n": 4914
        },
        "vision": {
          "value": 1288.576910862408,
          "rank": 28,
          "n": 2068
        }
      },
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
      "intelligence": 55.8021199855616,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 93.3,
      "visual": null,
      "visualParts": null,
      "aesthetics": null,
      "aestheticsParts": null,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Claude Fable 5.1 (Max)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Anthropic",
      "color": "#cc785c",
      "logo": "https://artificialanalysis.ai/img/logos/anthropic.svg",
      "aaSlug": "claude-fable-5-1",
      "aaName": "Claude Fable 5.1 (Max, Default Fallback)",
      "aaUrl": "https://artificialanalysis.ai/models/claude-fable-5-1",
      "intelligence": 53.3549259623252,
      "intelligenceEstimated": false,
      "costPerTask": 7.629706364004841,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 72.6,
      "visual": 99.8,
      "visualParts": {
        "img2web": {
          "value": 1719.7510952321622,
          "rank": 4,
          "n": 2470
        },
        "webdev": {
          "value": 1741.4137089213132,
          "rank": 5,
          "n": 7503
        },
        "vision": {
          "value": 1318.2396207991617,
          "rank": 4,
          "n": 4648
        }
      },
      "aesthetics": 99.8,
      "aestheticsParts": {
        "img2web": {
          "value": 1719.7510952321622,
          "rank": 4,
          "n": 2470
        },
        "webdev": {
          "value": 1741.4137089213132,
          "rank": 5,
          "n": 7503
        },
        "vision": {
          "value": 1318.2396207991617,
          "rank": 4,
          "n": 4648
        }
      },
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
      "intelligence": 52.673669395513,
      "intelligenceEstimated": false,
      "costPerTask": 3.2575003134834164,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 75,
      "visual": 95.7,
      "visualParts": {
        "img2web": {
          "value": 1731.3945950062785,
          "rank": 3,
          "n": 2739
        },
        "webdev": {
          "value": 1777.179843631321,
          "rank": 2,
          "n": 6014
        },
        "vision": {
          "value": 1281.3541584800787,
          "rank": 36,
          "n": 3590
        }
      },
      "aesthetics": 95.7,
      "aestheticsParts": {
        "img2web": {
          "value": 1731.3945950062785,
          "rank": 3,
          "n": 2739
        },
        "webdev": {
          "value": 1777.179843631321,
          "rank": 2,
          "n": 6014
        },
        "vision": {
          "value": 1281.3541584800787,
          "rank": 36,
          "n": 3590
        }
      },
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
      "intelligence": 52.393894697293,
      "intelligenceEstimated": false,
      "costPerTask": 4.515677444063016,
      "contextWindow": 1048576,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 88.4,
      "visual": 78.3,
      "visualParts": {
        "webdev": {
          "value": 1650.4267673951786,
          "rank": 15,
          "n": 1942
        }
      },
      "aesthetics": 78.3,
      "aestheticsParts": {
        "webdev": {
          "value": 1650.4267673951786,
          "rank": 15,
          "n": 1942
        }
      },
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
      "intelligence": 51.8332597011541,
      "intelligenceEstimated": false,
      "costPerTask": 0.7241670655535033,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 75.9,
      "visual": 94.4,
      "visualParts": {
        "img2web": {
          "value": 1703.4643962182554,
          "rank": 5,
          "n": 1430
        },
        "webdev": {
          "value": 1755.4597768759177,
          "rank": 4,
          "n": 2863
        },
        "vision": {
          "value": 1288.1896630416024,
          "rank": 30,
          "n": 1813
        }
      },
      "aesthetics": 94.4,
      "aestheticsParts": {
        "img2web": {
          "value": 1703.4643962182554,
          "rank": 5,
          "n": 1430
        },
        "webdev": {
          "value": 1755.4597768759177,
          "rank": 4,
          "n": 2863
        },
        "vision": {
          "value": 1288.1896630416024,
          "rank": 30,
          "n": 1813
        }
      },
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "GPT-5.6 Terra (Max)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "OpenAI",
      "color": "#1f1f1f",
      "logo": "https://artificialanalysis.ai/img/logos/openai.svg",
      "aaSlug": "gpt-5-6-terra",
      "aaName": "GPT-5.6 Terra (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/gpt-5-6-terra",
      "intelligence": 42.0829248239494,
      "intelligenceEstimated": false,
      "costPerTask": 1.3987235612691513,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 56.4,
      "visual": 53.6,
      "visualParts": {
        "img2web": {
          "value": 1540.4638245149708,
          "rank": 31,
          "n": 4331
        },
        "webdev": {
          "value": 1521.9055706410982,
          "rank": 50,
          "n": 13678
        },
        "vision": {
          "value": 1271.072526496708,
          "rank": 43,
          "n": 11020
        }
      },
      "aesthetics": 53.6,
      "aestheticsParts": {
        "img2web": {
          "value": 1540.4638245149708,
          "rank": 31,
          "n": 4331
        },
        "webdev": {
          "value": 1521.9055706410982,
          "rank": 50,
          "n": 13678
        },
        "vision": {
          "value": 1271.072526496708,
          "rank": 43,
          "n": 11020
        }
      },
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Ling 3.1 Flash",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "InclusionAI",
      "color": "#4fb5ff",
      "logo": "https://artificialanalysis.ai/img/logos/inclusionai.jpg",
      "aaSlug": "ling-3-1-flash",
      "aaName": "Ling 3.1 Flash",
      "aaUrl": "https://artificialanalysis.ai/models/ling-3-1-flash",
      "intelligence": 41.0906200397391,
      "intelligenceEstimated": false,
      "costPerTask": 0.9996439559293879,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 72.2,
      "visual": null,
      "visualParts": null,
      "aesthetics": null,
      "aestheticsParts": null,
      "freeInOc": false,
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
      "intelligence": 40.9262321765904,
      "intelligenceEstimated": false,
      "costPerTask": 1.2427947606950427,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 65.1,
      "visual": 70.8,
      "visualParts": {
        "img2web": {
          "value": 1593.067219021476,
          "rank": 19,
          "n": 2015
        },
        "webdev": {
          "value": 1585.1875723150379,
          "rank": 31,
          "n": 10514
        },
        "vision": {
          "value": 1314.0797890897727,
          "rank": 8,
          "n": 3792
        }
      },
      "aesthetics": 70.8,
      "aestheticsParts": {
        "img2web": {
          "value": 1593.067219021476,
          "rank": 19,
          "n": 2015
        },
        "webdev": {
          "value": 1585.1875723150379,
          "rank": 31,
          "n": 10514
        },
        "vision": {
          "value": 1314.0797890897727,
          "rank": 8,
          "n": 3792
        }
      },
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Qwen3.8 2.4T A95B",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Alibaba",
      "color": "#ff7018",
      "logo": "https://artificialanalysis.ai/img/logos/alibaba.svg",
      "aaSlug": "qwen3-8-2-4t-a95b",
      "aaName": "Qwen3.8 2.4T A95B",
      "aaUrl": "https://artificialanalysis.ai/models/qwen3-8-2-4t-a95b",
      "intelligence": 39.9461723105325,
      "intelligenceEstimated": false,
      "costPerTask": 2.1551619442434675,
      "contextWindow": 262000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 60.6,
      "visual": null,
      "visualParts": null,
      "aesthetics": null,
      "aestheticsParts": null,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Qwen3.8-Flash-Next",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Alibaba",
      "color": "#ff7018",
      "logo": "https://artificialanalysis.ai/img/logos/alibaba.svg",
      "aaSlug": "qwen3-8-flash-next",
      "aaName": "Qwen3.8-Flash-Next",
      "aaUrl": "https://artificialanalysis.ai/models/qwen3-8-flash-next",
      "intelligence": 39.8223021864741,
      "intelligenceEstimated": false,
      "costPerTask": 0.3721760025302965,
      "contextWindow": 256000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 58.8,
      "visual": 72,
      "visualParts": {
        "webdev": {
          "value": 1630.3289125780575,
          "rank": 19,
          "n": 8083
        }
      },
      "aesthetics": 72,
      "aestheticsParts": {
        "webdev": {
          "value": 1630.3289125780575,
          "rank": 19,
          "n": 8083
        }
      },
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
      "intelligence": 38.8666662997805,
      "intelligenceEstimated": false,
      "costPerTask": 0.8435187802958677,
      "contextWindow": 1048576,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 71.1,
      "visual": 34.8,
      "visualParts": {
        "webdev": {
          "value": 1511.3260970415822,
          "rank": 55,
          "n": 991
        }
      },
      "aesthetics": 34.8,
      "aestheticsParts": {
        "webdev": {
          "value": 1511.3260970415822,
          "rank": 55,
          "n": 991
        }
      },
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Mistral Large 4 Preview",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Mistral",
      "color": "#f32e02",
      "logo": "https://artificialanalysis.ai/img/logos/mistral.svg",
      "aaSlug": "mistral-large-4",
      "aaName": "Mistral Large 4 Preview",
      "aaUrl": "https://artificialanalysis.ai/models/mistral-large-4",
      "intelligence": 38.3770408917494,
      "intelligenceEstimated": false,
      "costPerTask": 1.1341017484612892,
      "contextWindow": 524288,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 58.8,
      "visual": null,
      "visualParts": null,
      "aesthetics": null,
      "aestheticsParts": null,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Agnes 2.5 Pro Beta",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Sapiens AI",
      "color": "#1521a9",
      "logo": "https://artificialanalysis.ai/img/logos/sapiens.svg",
      "aaSlug": "agnes-2-5-pro-beta",
      "aaName": "Agnes 2.5 Pro Beta",
      "aaUrl": "https://artificialanalysis.ai/models/agnes-2-5-pro-beta",
      "intelligence": 35.2413300369053,
      "intelligenceEstimated": true,
      "costPerTask": null,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 63.8,
      "visual": null,
      "visualParts": null,
      "aesthetics": null,
      "aestheticsParts": null,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "DeepSeek V4 Flash Vision (Max)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "DeepSeek",
      "color": "#2243e6",
      "logo": "https://artificialanalysis.ai/img/logos/deepseek.svg",
      "aaSlug": "deepseek-v4-flash-vision",
      "aaName": "DeepSeek V4 Flash Vision (Max)",
      "aaUrl": "https://artificialanalysis.ai/models/deepseek-v4-flash-vision",
      "intelligence": 34.8390628035969,
      "intelligenceEstimated": false,
      "costPerTask": 1.037910627432751,
      "contextWindow": 1000000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 48,
      "visual": null,
      "visualParts": null,
      "aesthetics": null,
      "aestheticsParts": null,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "JT-4.1 Flash 236B A21B (Reasoning)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "China Mobile",
      "color": "#00b8ea",
      "logo": "https://artificialanalysis.ai/img/logos/china-mobile.png",
      "aaSlug": "jt-4-1-flash-236b-a21b",
      "aaName": "JT-4.1 Flash 236B A21B (Reasoning)",
      "aaUrl": "https://artificialanalysis.ai/models/jt-4-1-flash-236b-a21b",
      "intelligence": 33.9172581709394,
      "intelligenceEstimated": false,
      "costPerTask": null,
      "contextWindow": 262144,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 44.7,
      "visual": null,
      "visualParts": null,
      "aesthetics": null,
      "aestheticsParts": null,
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
      "intelligence": 33.6762858057476,
      "intelligenceEstimated": false,
      "costPerTask": 1.0074896941565943,
      "contextWindow": 256000,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 54.8,
      "visual": 64.7,
      "visualParts": {
        "img2web": {
          "value": 1576.135585479396,
          "rank": 24,
          "n": 5117
        },
        "webdev": {
          "value": 1593.2035374291577,
          "rank": 29,
          "n": 15940
        },
        "vision": {
          "value": 1271.392668035682,
          "rank": 42,
          "n": 7013
        }
      },
      "aesthetics": 64.7,
      "aestheticsParts": {
        "img2web": {
          "value": 1576.135585479396,
          "rank": 24,
          "n": 5117
        },
        "webdev": {
          "value": 1593.2035374291577,
          "rank": 29,
          "n": 15940
        },
        "vision": {
          "value": 1271.392668035682,
          "rank": 42,
          "n": 7013
        }
      },
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "Motif 3",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "Motif Technologies",
      "color": "#6a93eb",
      "logo": "https://artificialanalysis.ai/img/logos/motif.svg",
      "aaSlug": "motif-3",
      "aaName": "Motif 3",
      "aaUrl": "https://artificialanalysis.ai/models/motif-3",
      "intelligence": 33.566562209723,
      "intelligenceEstimated": true,
      "costPerTask": null,
      "contextWindow": 262144,
      "isReasoning": true,
      "isOpenWeights": true,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 50.3,
      "visual": null,
      "visualParts": null,
      "aesthetics": null,
      "aestheticsParts": null,
      "freeInOc": false,
      "status": "not-in-go"
    },
    {
      "name": "GPT-5.3 Codex (Xhigh)",
      "inGo": false,
      "goModelId": null,
      "inGoApi": false,
      "creator": "OpenAI",
      "color": "#1f1f1f",
      "logo": "https://artificialanalysis.ai/img/logos/openai.svg",
      "aaSlug": "gpt-5-3-codex",
      "aaName": "GPT-5.3 Codex (Xhigh)",
      "aaUrl": "https://artificialanalysis.ai/models/gpt-5-3-codex",
      "intelligence": 32.5028174368983,
      "intelligenceEstimated": true,
      "costPerTask": null,
      "contextWindow": 400000,
      "isReasoning": true,
      "isOpenWeights": false,
      "go": null,
      "efficiency": null,
      "efficiencyProvisional": false,
      "valueScore": null,
      "reliability": 29.6,
      "visual": 8.7,
      "visualParts": {
        "img2web": {
          "value": 1443.5742476557307,
          "rank": 50,
          "n": 2670
        },
        "webdev": {
          "value": 1406.6187574659548,
          "rank": 89,
          "n": 2641
        }
      },
      "aesthetics": 8.7,
      "aestheticsParts": {
        "img2web": {
          "value": 1443.5742476557307,
          "rank": 50,
          "n": 2670
        },
        "webdev": {
          "value": 1406.6187574659548,
          "rank": 89,
          "n": 2641
        }
      },
      "freeInOc": false,
      "status": "not-in-go"
    }
  ]
};
