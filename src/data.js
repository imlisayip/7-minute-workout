export const exercises = [
    {
        audio: 'jumpingJacks',
        exercise: 'Jumping jacks',
        exerciseSpriteDuration: 4000,
        sprite: 10000,
        restSpriteDuration: 4000,
    },
    {
        audio: 'wallSit',
        exercise: 'Wall sit',
        exerciseSpriteDuration: 4000,
        sprite: 59000,
        restSpriteDuration: 4000,
    },
    {
        audio: 'pushUp',
        exercise: 'Push up',
        exerciseSpriteDuration: 2000,
        sprite: 63000,
        restSpriteDuration: 4000,
    },
    {
        audio: 'abCrunch',
        exercise: 'Abdominal crunch',
        exerciseSpriteDuration: 3000,
        sprite: 66000,
        restSpriteDuration: 4000,
    },
    {
        audio: 'stepUpToChair',
        exercise: 'Step-up onto chair',
        exerciseSpriteDuration: 4000,
        sprite: 69000,
        restSpriteDuration: 4000,
    },
    {
        audio: 'squat',
        exercise: 'Squat',
        exerciseSpriteDuration: 3000,
        sprite: 73000,
        restSpriteDuration: 4000,
    },
    {
        audio: 'tricepDipOnChair',
        exercise: 'Triceps dip on chair',
        exerciseSpriteDuration: 3000,
        sprite: 76000,
        restSpriteDuration: 4000,
    },
    {
        audio: 'plank',
        exercise: 'Plank',
        exerciseSpriteDuration: 4000,
        sprite: 79000,
        restSpriteDuration: 4000,
    },
    {
        audio: 'highKnee',
        exercise: 'High knees running in place',
        exerciseSpriteDuration: 5000,
        sprite: 83000,
        restSpriteDuration: 4000,
    },
    {
        audio: 'lunge',
        exercise: 'Lunge',
        exerciseSpriteDuration: 2000,
        sprite: 88000,
        restSpriteDuration: 4000,
    },
    {
        audio: 'pushUpRotation',
        exercise: 'Push ups with rotation',
        exerciseSpriteDuration: 5000,
        sprite: 90000,
        restSpriteDuration: 4000,
    },
    {
        audio: 'sidePlank',
        exercise: 'Side plank',
        exerciseSpriteDuration: 3000,
        sprite: 95000,
        restSpriteDuration: 4000,
    },
]

export const steps = [
    {
        step: 'Starting workout in 5 seconds',
        key: 'readyFor7MinuteIntro',
        type: 'rest',
        timer: 'readyFor7MinuteIntroTimer',
        elapsedTime: 1000,
    },
    {
        step: 'Jumping jacks',
        key: 'jumpingJacks',
        type: 'exercise',
        timer: 'timer',
        elapsedTime: 34000,
    },
    {
        step: 'Rest for 10 seconds',
        key: 'rest',
        type: 'rest',
        timer: 'restTimer',
        elapsedTime: 14000,
    },
    {
        step: 'Wall sit',
        key: 'wallSit',
        type: 'exercise',
        timer: 'timer',
        elapsedTime: 34000,
    },
    {
        step: 'Rest for 10 seconds',
        key: 'rest',
        type: 'rest',
        timer: 'restTimer',
        elapsedTime: 14000,
    },
    {
        step: 'Push up',
        key: 'pushUp',
        type: 'exercise',
        timer: 'timer',
        elapsedTime: 32000,
    },
    {
        step: 'Rest for 10 seconds',
        key: 'rest',
        type: 'rest',
        timer: 'restTimer',
        elapsedTime: 14000,
    },
    {
        step: 'Abdominal crunch',
        key: 'abCrunch',
        type: 'exercise',
        timer: 'timer',
        elapsedTime: 33000,
    },
    {
        step: 'Rest for 10 seconds',
        key: 'rest',
        type: 'rest',
        timer: 'restTimer',
        elapsedTime: 14000,
    },
    {
        step: 'Step-up onto chair',
        key: 'stepUpToChair',
        type: 'exercise',
        timer: 'timer',
        elapsedTime: 34000,
    },
    {
        step: 'Rest for 10 seconds',
        key: 'rest',
        type: 'rest',
        timer: 'restTimer',
        elapsedTime: 14000,
    },
    {
        step: 'Squat',
        key: 'squat',
        type: 'exercise',
        timer: 'timer',
        elapsedTime: 33000,
    },
    {
        step: 'Rest for 10 seconds',
        key: 'rest',
        type: 'rest',
        timer: 'restTimer',
        elapsedTime: 14000,
    },
    {
        step: 'Triceps dip on chair',
        key: 'tricepDipOnChair',
        type: 'exercise',
        timer: 'timer',
        elapsedTime: 33000,
    },
    {
        step: 'Rest for 10 seconds',
        key: 'rest',
        type: 'rest',
        timer: 'restTimer',
        elapsedTime: 14000,
    },
    {
        step: 'Plank',
        key: 'plank',
        type: 'exercise',
        timer: 'timer',
        elapsedTime: 34000,
    },
    {
        step: 'Rest for 10 seconds',
        key: 'rest',
        type: 'rest',
        timer: 'restTimer',
        elapsedTime: 14000,
    },
    {
        step: 'High knees running in place',
        key: 'highKnee',
        type: 'exercise',
        timer: 'timer',
        elapsedTime: 35000,
    },
    {
        step: 'Rest for 10 seconds',
        key: 'rest',
        type: 'rest',
        timer: 'restTimer',
        elapsedTime: 14000,
    },
    {
        step: 'Lunge',
        key: 'lunge',
        type: 'exercise',
        timer: 'timer',
        elapsedTime: 2000,
    },
    {
        step: 'Rest for 10 seconds',
        key: 'rest',
        type: 'rest',
        timer: 'restTimer',
        elapsedTime: 14000,
    },
    {
        step: 'Push ups with rotation',
        key: 'pushUpRotation',
        type: 'exercise',
        timer: 'timer',
        elapsedTime: 35000,
    },
    {
        step: 'Rest for 10 seconds',
        key: 'rest',
        type: 'rest',
        timer: 'restTimer',
        elapsedTime: 14000,
    },
    {
        step: 'Side plank',
        key: 'sidePlank',
        type: 'exercise',
        timer: 'timer',
        elapsedTime: 33000,
    },
]

export const sprite = {
    readyFor7MinuteIntro: [0, 5000],
    readyFor7MinuteIntroTimer: [5000, 5000],
    timer: [14000, 30000],
    rest: [45000, 4000],
    restTimer: [49000, 10000],
    done: [98000, 6000],
    highFive: [104000, 1000],

    jumpingJacks: [10000, 4000],
    wallSit: [59000, 4000],
    pushUp: [63000, 2000],
    abCrunch: [66000, 3000],
    stepUpToChair: [69000, 4000],
    squat: [73000, 3000],
    tricepDipOnChair: [76000, 3000],
    plank: [79000, 4000],
    highKnee: [83000, 5000],
    lunge: [88000, 2000],
    pushUpRotation: [90000, 5000],
    sidePlank: [95000, 3000],
}