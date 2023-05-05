import { cssVar, SystemStyleObject, theme } from "@chakra-ui/react"
import { merge } from "lodash"

const {
  Accordion: accordionDefaultTheme,
  Avatar: avatarDefaultTheme,
  Badge: badgeDefaultTheme,
  Breadcrumb: breadcrumbDefaultTheme,
  Button: buttonDefaultTheme,
  Checkbox: checkboxDefaultTheme,
  CloseButton: closeButtonDefaultTheme,
  Code: codeDefaultTheme,
  Divider: dividerDefaultTheme,
  Drawer: drawerDefaultTheme,
  Form: formDefaultTheme,
  FormLabel: formLabelDefaultTheme,
  Heading: headingDefaultTheme,
  Input: inputDefaultTheme,
  Link: linkDefaultTheme,
  List: listDefaultTheme,
  Menu: menuDefaultTheme,
  Modal: modalDefaultTheme,
  Radio: radioDefaultTheme,
  Select: selectDefaultTheme,
  Spinner: spinnerDefaultTheme,
  Switch: switchDefaultTheme,
  Table: tableDefaultTheme,
  Tabs: tabsDefaultTheme,
  Tag: tagDefaultTheme,
} = theme.components

export {
  accordionDefaultTheme,
  avatarDefaultTheme,
  badgeDefaultTheme,
  breadcrumbDefaultTheme,
  buttonDefaultTheme,
  checkboxDefaultTheme,
  closeButtonDefaultTheme,
  codeDefaultTheme,
  dividerDefaultTheme,
  drawerDefaultTheme,
  formDefaultTheme,
  formLabelDefaultTheme,
  headingDefaultTheme,
  inputDefaultTheme,
  linkDefaultTheme,
  listDefaultTheme,
  menuDefaultTheme,
  modalDefaultTheme,
  radioDefaultTheme,
  selectDefaultTheme,
  spinnerDefaultTheme,
  switchDefaultTheme,
  tableDefaultTheme,
  tabsDefaultTheme,
  tagDefaultTheme,
}

/**
 * Allows for type safety groups of styles that will be merged.
 *
 * This is for merging default imported theming with custom styles.
 *
 * @param defaultTheming - The related object that comes from the Charka default themes
 *
 * @param styleObjs - The following style objects to be merged
 */
export function defineMergeStyles(
  defaultTheming?: SystemStyleObject | unknown,
  ...styleObjs: SystemStyleObject[] | unknown[]
): Record<string, SystemStyleObject> {
  return merge(defaultTheming, ...styleObjs)
}

export const _notDisabled = "&:not([data-disabled], [disabled])"

const $inputTriggerDisableColor = cssVar("input-trigger-disable-color")

export const commonInputTriggerStyles = {
  commonControlProps: {
    border: "1px",
    borderColor: "bodyLight",
    outline: "2px solid",
    outlineColor: "transparent",
    _checked: {
      color: "background",
      bg: "primary",
      borderColor: "primary",
    },
    _focusVisible: {
      borderColor: "primaryHighContrast",
      outlineColor: "primaryHover",
      outlineOffset: "2px",
      boxShadow: "none",
    },
    _disabled: {
      bg: $inputTriggerDisableColor.reference,
      borderColor: $inputTriggerDisableColor.reference,
      opacity: 1,
      _checked: {
        bg: $inputTriggerDisableColor.reference,
        borderColor: $inputTriggerDisableColor.reference,
      },
    },
    [_notDisabled]: {
      // Hovering over the label triggers the style for the control
      "*:hover > &": {
        bg: "primaryHover",
        borderColor: "primaryHighContrast",
      },
    },
  },
  commonContainerProps: {
    [$inputTriggerDisableColor.variable]: "colors.disabled",
    _disabled: {
      cursor: "not-allowed",
    },
  },
  commonLabelProps: {
    _disabled: {
      color: $inputTriggerDisableColor.reference,
      opacity: 1,
    },
  },
}
