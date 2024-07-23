export const movies = [
  {
    id: 1,
    title: 'Intensamente 2',
    language: 'Premium Español',
    poster: 'https://pics.filmaffinity.com/inside_out_2-365634749-mmed.jpg'
  }
]

export const auditoriums = {
  '1': [
    {
      id: 1,
      room: 'Sala A',
      schedules: [
        {
          id: 1,
          time: '08:00 PM',
          available: true 
        },
        {
          id: 2,
          time: '10:00 PM',
          available: false
        },
        {
          id: 3,
          time: '12:00 PM',
          available: true
        }
    ]
    },
    {
      id: 2,
      room: 'Sala B',
      schedules: [
        {
          id: 1,
          time: '08:00 PM',
          available: true 
        },
        {
          id: 2,
          time: '10:00 PM',
          available: false
        },
        {
          id: 3,
          time: '12:00 PM',
          available: true
        }
      ]
    },
    {
      id: 3,
      room: 'Sala C',
      schedules: [
        {
          id: 1,
          time: '08:00 PM',
          available: true 
        },
        {
          id: 2,
          time: '10:00 PM',
          available: false
        },
        {
          id: 3,
          time: '12:00 PM',
          available: true
        }
      ]
    },
  ]
};

export const seats = {
  '1' : {
    '1': {
      '1': {
        rows: 4,
        columns: 5,
        seatType: 'Standard',
        seatPrice: 100,
        seatMap: [
          [false, false, false, true, false],
          [false, false, false, true, false],
          [false, true, false, false, true],
          [false, true, false, false, true],
        ]
      }
    },
    '2' : {
      '1': {
        rows: 4,
        columns: 5,
        seatType: 'Standard',
        seatPrice: 100,
        seatMap: [
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, true, true, true, true],
          [false, true, true, true, true],
        ]
      }
    },
    '3': {
      '1': {
        rows: 6,
        columns: 5,
        seatType: 'Standard',
        seatPrice: 100,
        seatMap: [
          [false, true, true, false, false],
          [false, false, false, false, false],
          [false, false, true, true, true],
          [false, true, true, true, true],
          [false, false, false, false, false],
          [false, true, true, true, true],
        ]
      },
    }
  }
}