import l10n from '../../../language'

const statuses = {
  implemented: {
    name: "Implemented",
    locName: l10n.components.implemented,
    backgroundColour: "rgba(104, 255, 55, 0.2)",
  },
  planned: {
    name: "Planned",
    locName: l10n.components.planned,
    backgroundColour: "rgba(78, 140, 255, 0.2)",
  },
  working: {
    name: "in Process",
    locName: l10n.components.working,
    backgroundColour: "rgba(255, 59, 20, 0.2)",
  },
  stopped: {
    name: "stopped Process",
    locName: l10n.components.stopped,
    backgroundColour: "rgba(213, 0, 0, 0.2)",
  },
  bugfixes: {
    name: "Maintenance",
    locName: l10n.components.bugfixes,
    backgroundColour: "rgba(128, 128, 128, 0.2)",
  },
  checking: {
    name: "Checking Code",
    locName: l10n.components.checking,
    backgroundColour: "rgba(174, 50, 255, 0.2)",
  },
  unknown: {
    name: "Unknown",
    locName: l10n.components.unknown,
    backgroundColour: "rgba(128, 128, 128, 0.2)",
  },

};

export default statuses;