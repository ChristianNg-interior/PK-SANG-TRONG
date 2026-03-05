var APP_DATA = {
  "scenes": [
    {
      "id": "0-kv-phng-khch",
      "name": "KV PHÒNG KHÁCH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2002423685450836,
          "pitch": 0.2706100936962681,
          "rotation": 0,
          "target": "1-kv-snh"
        },
        {
          "yaw": 0.9188398619924723,
          "pitch": 0.054068605805317915,
          "rotation": 0,
          "target": "2-kv-bp-v-bn-n"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kv-snh",
      "name": "KV SẢNH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.851230884436788,
          "pitch": 0.31765468263575336,
          "rotation": 0,
          "target": "2-kv-bp-v-bn-n"
        },
        {
          "yaw": 1.0991009475770426,
          "pitch": 0.18719177179974622,
          "rotation": 0,
          "target": "0-kv-phng-khch"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kv-bp-v-bn-n",
      "name": "KV BẾP VÀ BÀN ĂN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.213306697446514,
          "pitch": 0.3770391505408437,
          "rotation": 0,
          "target": "1-kv-snh"
        },
        {
          "yaw": -0.9689468942714416,
          "pitch": 0.12705231480057222,
          "rotation": 0,
          "target": "0-kv-phng-khch"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
