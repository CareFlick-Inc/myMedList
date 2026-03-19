import appLabels, { appDescription, appScreenName } from '../static_resources/strings';

const helpItems = [
    {
        title: appScreenName.addSlip,
        icon: "add",
        screenTitle: appLabels.addPhotoTitle,
        description: appDescription.AddSlipHelpDesctiption
    },
    {
        title: appScreenName.Reconcile,
        icon: "refresh",
        screenTitle: appLabels.reconcileTitle,
        description: appDescription.ReconcileHelpDesctiption
    },
    {
        title: appScreenName.share,
        icon: "share",
        screenTitle: appLabels.shareTitle,
        description: appDescription.ShareHelpDesctiption
    }
];

export default helpItems;
