using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
using UnityEngine.Events;


public class DrawLine : MonoBehaviour
{
    [Header("线宽度")]
    public float lineWidth = 3f;
    [Header("线颜色")]
    public Color lineColor = Color.red;
    void Start()
    {
        EventTrigger testET = gameObject.AddComponent<EventTrigger>();
        testET.triggers = new List<EventTrigger.Entry>();
        EventTrigger.Entry entryDown = new EventTrigger.Entry();
        EventTrigger.Entry entryUp = new EventTrigger.Entry();
        EventTrigger.Entry entryDrag = new EventTrigger.Entry();
        entryDown.eventID = EventTriggerType.PointerDown;
        entryUp.eventID = EventTriggerType.PointerUp;
        entryDrag.eventID = EventTriggerType.Drag;
        entryDown.callback = new EventTrigger.TriggerEvent();
        entryUp.callback = new EventTrigger.TriggerEvent();
        entryDrag.callback = new EventTrigger.TriggerEvent();
        // 线段起点、终点
        Vector3 startPos = Vector3.zero;
        Vector3 endPos = Vector3.zero;

        GameObject lineObj = null;
        RectTransform lineObjRT = null;
        // 按下回调
        UnityAction<BaseEventData> downCB = new UnityAction<BaseEventData>((BaseEventData bed) =>
        {
            lineObj = new GameObject("LineObj");
            lineObj.SetActive(false);
            lineObjRT = lineObj.AddComponent<RectTransform>();
            lineObjRT.pivot = new Vector2(0, 0.5f);
            lineObjRT.localScale = Vector3.one;
            Image lineObjImg = lineObj.AddComponent<Image>();
            lineObjImg.color = lineColor;
            lineObjImg.raycastTarget = false;
            lineObjRT.SetParent(transform);
            startPos = Input.mousePosition;
            lineObjRT.position = startPos;
            lineObjRT.sizeDelta = Vector2.zero;
            lineObj.SetActive(true);
        });
        // 抬起回调
        UnityAction<BaseEventData> upCB = new UnityAction<BaseEventData>((BaseEventData bed) =>
        {
            //lineObj.SetActive(false);
        });
        // 拖拽回调
        UnityAction<BaseEventData> dragCB = new UnityAction<BaseEventData>((BaseEventData bed) =>
        {
            endPos = Input.mousePosition;
            Vector3 durationPos = endPos - startPos;
            lineObjRT.sizeDelta = new Vector2(durationPos.magnitude, lineWidth);
            float angle = Mathf.Atan2(durationPos.y, durationPos.x) * Mathf.Rad2Deg;
            lineObjRT.localRotation = Quaternion.Euler(0, 0, angle);
        });

        // 绑定事件
        entryDown.callback.AddListener(downCB);
        entryUp.callback.AddListener(upCB);
        entryDrag.callback.AddListener(dragCB);
        testET.triggers.Add(entryDown);
        testET.triggers.Add(entryUp);
        testET.triggers.Add(entryDrag);
    }

}