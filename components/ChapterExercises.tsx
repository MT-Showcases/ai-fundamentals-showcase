import type { ChapterExercise } from '@/data/chapters';
import Link from 'next/link';

interface Props {
  exercises: ChapterExercise[];
}

export default function ChapterExercises({ exercises }: Props) {
  if (!exercises?.length) return null;

  return (
    <div className="mb-12">
      <h3 className="text-cyan-300 font-bold mb-4">🧪 Esercizi Pratici</h3>
      <div className="space-y-4">
        {exercises.map((exercise, idx) => (
          <div key={idx} className="bg-navy-800/40 border border-blue-500/30 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h4 className="text-white font-semibold">{exercise.title}</h4>
              {exercise.duration && (
                <span className="text-xs px-2 py-1 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 whitespace-nowrap">
                  {exercise.duration}
                </span>
              )}
            </div>

            <p className="text-gray-300 mb-4">{exercise.objective}</p>

            <ol className="list-decimal list-inside text-gray-200 space-y-2 mb-4">
              {exercise.steps.map((step, stepIdx) => (
                <li key={stepIdx}>{step}</li>
              ))}
            </ol>

            {exercise.resources && exercise.resources.length > 0 && (
              <div className="mb-4">
                <div className="text-sm font-semibold text-cyan-200 mb-2">Dataset & risorse</div>
                <div className="flex flex-wrap gap-2">
                  {exercise.resources.map((res, rIdx) => (
                    <Link
                      key={rIdx}
                      href={res.path}
                      className="inline-flex items-center px-3 py-2 rounded-lg border border-blue-500/40 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all text-sm"
                      target="_blank"
                    >
                      {res.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="text-sm text-gray-300 border-t border-navy-600 pt-3">
              <span className="font-semibold text-cyan-200">Consegna:</span> {exercise.deliverable}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
