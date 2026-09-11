# Source-art prompt

Use this prompt before finalization. Generate the source art first; the
repository command creates alpha after the art is accepted.

\`\`\`
Foundry VTT token source art. Square 1:1 composition designed to remain readable
inside a centered circular crop.

Subject: {SIZE} {SUBJECT}.
Identity: {IDENTITY}.
Pose or action: {POSE}.
Composition: {COMPOSITION}. Keep the important silhouette, face or head, hands,
weapons, wings, and identifying marks inside the inner 90 percent of the frame.
Camera: {CAMERA}.
Facing: {FACING}.
Background: {BACKGROUND}.
Frame: {FRAME}.
Style: {STYLE}.

Readable at token thumbnail size. Strong subject silhouette. Coherent lighting,
grounding, and material detail. No accidental cropping, duplicate limbs, extra
weapons, labels, watermark, UI, or generation debris. Do not render a fake
checkerboard or claim transparency; the finalizer supplies the transparent
circular background.
\`\`\`

If the same owner has an existing identity reference, add:

\`Keep this identity. Preserve the same colors, silhouette, marks, and gear; change only the requested composition or camera.\`

Use [../assets/prompt-template.txt](../assets/prompt-template.txt) as the
copyable blank.
