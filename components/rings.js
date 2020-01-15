const dash = n => `${n * 100}, 100`

export default ({
  move = 0.5,
  exercise = 0.75,
  stand = 0.875,
  size = 72,
  ...props
}) => (
  <svg viewBox="0 0 36 36" width={size} height={size} {...props}>
    <g className="move">
      <circle strokeWidth={3} r={16} className="background" />
      <circle
        strokeWidth={3}
        r={16}
        className="completed"
        strokeDasharray={dash(move)}
      />
    </g>
    <g className="exercise">
      <circle strokeWidth={4} r={16} className="background" />
      <circle
        strokeWidth={4}
        r={16}
        className="completed"
        strokeDasharray={dash(exercise)}
      />
    </g>
    <g className="stand" stroke="var(--stand)">
      <circle strokeWidth={6} r={16} className="background" />
      <circle
        strokeWidth={6}
        r={16}
        className="completed"
        strokeDasharray={dash(stand)}
      />
    </g>
    <style jsx>{`
      g {
        transform-origin: 50%;
      }
      circle {
        fill: none;
        transform: translateX(50%) translateY(50%);
      }
      .background {
        opacity: 0.25;
      }
      .completed {
        animation: RingProgress 1s ease-in-out forwards;
        stroke-linecap: round;
      }
      .move {
        stroke: var(--move);
        transform: scale(1) rotate(-90deg);
      }
      .exercise {
        stroke: var(--exercise);
        transform: scale(0.75) rotate(-90deg);
      }
      .stand {
        stroke: var(--stand);
        transform: scale(0.5) rotate(-90deg);
      }
    `}</style>
  </svg>
)
