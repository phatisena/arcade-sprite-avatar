namespace AvatarID {

    let id: number;

    export function create() {
        if (!(id)) id = 0
        return id++
    }

    //%isKind
    export const Head = create()

    //%isKind
    export const BodyTop = create()

    //%isKind
    export const BodyBottom = create()

    //%isKind
    export const HandLeft = create()

    //%isKind
    export const ArmTopLeft = create()

    //%isKind
    export const ArmBottomLeft = create()

    //%isKind
    export const HandRight = create()

    //%isKind
    export const ArmTopRight = create()

    //%isKind
    export const ArmBottomRight = create()

    //%isKind
    export const FeetLeft = create()

    //%isKind
    export const LegTopLeft = create()

    //%isKind
    export const LegBottomLeft = create()

    //%isKind
    export const FeetRight = create()

    //%isKind
    export const LegTopRight = create()

    //%isKind
    export const LegBottomRight = create()

}
