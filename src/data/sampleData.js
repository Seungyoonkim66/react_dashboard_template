import palette from '../lib/palette';

export const sampleData = {
    // 각 막대별 라벨
    labels: ["team1", "team2", "team3", "team4"],
        datasets: [
          {
            label: "Pending Approval",
            backgroundColor: "rgb(51, 153, 255)",
            data: [20, 10, 30, 15],
            stack: 1,
            name: "AMR"
          },
          {
            label: "Invoice Created",
            backgroundColor: "rgb(51, 204, 51)",
            data: [60, 20, 20, 30],
            stack: 1
          },
          {
            label: "Approved!",
            backgroundColor: "green",
            data: [40, 50, 20, 45],
            stack: 1
          },

          {
            label: "Pending Approval",
            backgroundColor: "rgb(51, 153, 255)",
            data: [25, 5, 20, 10],
            stack: 2
          },
          {
            label: "Invoice Created!",
            backgroundColor: "rgb(51, 204, 51)",
            data: [51, 25, 10, 30],
            stack: 2
          },
          {
            label: "Approved!",
            backgroundColor: "green",
            data: [45, 40, 22, 55],
            stack: 2
          },

          {
            label: "Pending Approval",
            backgroundColor: "rgb(51, 153, 255)",
            data: [35, 5, 25, 10],
            stack: 3
          },
          {
            label: "Invoice Created!",
            backgroundColor: "rgb(51, 204, 51)",
            data: [51, 25, 10, 30],
            stack: 3
          },
          {
            label: "Approved!",
            backgroundColor: "green",
            data: [45, 40, 22, 55],
            stack: 3
          },

          {
            label: "Pending Approval",
            backgroundColor: "rgb(51, 153, 255)",
            data: [15, 5, 21, 17],
            stack: 4
          },
          {
            label: "Invoice Created!",
            backgroundColor: "rgb(51, 204, 51)",
            data: [51, 25, 10, 30],
            stack: 4
          },
          {
            label: "Approved!",
            backgroundColor: "green",
            data: [45, 40, 22, 55],
            stack: 4
          }
        ]
      
};