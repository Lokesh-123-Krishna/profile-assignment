import './vtu-table.css';
const jsonData = [
  [
    [
      "Visvesvaraya Technological University, Belagavi Scheme of Teaching and Examinations-2022 Outcome-Based Education(OBE) and Choice Based Credit System(CBCS) (Effective from the academic year 2022-23)",
      1,
      14,
    ],
  ],
  [["I Semester (CSE Streams)", "(Physics Group)", 1, 14]],
  [
    ["Sl. No", 3, 1],
    ["Course and CourseCode", 3, 2],
    ["Course Title", 3, 1],
    ["TD/PSB", 3, 1],
    ["Teaching Hours/Week", 1, 4],
    ["Examination", 1, 4],
    ["Credits", 3, 1],
  ],
  [
    ["Theory Lecture", 1, 1],
    ["Tutorial", 1, 1],
    ["Practical/ Drawing", 1, 1],
    ["SDA", 1, 1],
    ["Duration in hours", 2, 1],
    ["CIE Marks", 2, 1],
    ["SEE Marks", 2, 1],
    ["Total Marks", 2, 1],
  ],
  [
    ["L", 1, 1],
    ["T", 1, 1],
    ["P", 1, 1],
    ["S", 1, 1],
  ],
  [
    ["1", 1, 1],
    ["*ASC(IC)", 1, 1],
    ["22MATS11", 1, 1],
    ["Mathematics for CSE Stream-I", 1, 1],
    ["Maths", 1, 1],
    ["2", 1, 1],
    ["2", 1, 1],
    ["2", 1, 1],
    ["0", 1, 1],
    ["03", 1, 1],
    ["50", 1, 1],
    ["50", 1, 1],
    ["100", 1, 1],
    ["04", 1, 1],
  ],
  [
    ["2", 1, 1],
    ["#ASC(IC)", 1, 1],
    ["22PHYS12", 1, 1],
    ["Physics for CSE stream", 1, 1],
    ["Physics", 1, 1],
    ["2", 1, 1],
    ["2", 1, 1],
    ["2", 1, 1],
    ["0", 1, 1],
    ["03+02", 1, 1],
    ["50", 1, 1],
    ["50", 1, 1],
    ["100", 1, 1],
    ["04", 1, 1],
  ],
];

export const VtuTable = () => {
  return (
    <div>
      <div>
        <h4>Table JSON:</h4>

        <div>
          <table>
            <thead>
              <tr>
                <td colSpan={14} className='thead'>{jsonData[0][0][0]}</td>
              </tr>
              <tr>
                <td colSpan={12} className='sub-header font-weight font-size-small'>{jsonData[1][0][0]}</td>
                <td colSpan={2} className='sub-border-header font-weight font-size-small'>{jsonData[1][0][1]}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-weight font-size-small" rowSpan={3}>{jsonData[2][0][0]}</td>
                <td className="font-weight font-size-small" colSpan={2} rowSpan={3}>{jsonData[2][1][0]}</td>
                <td className="font-weight font-size-small" rowSpan={3}>{jsonData[2][2][0]}</td>
                <td className="font-weight font-size-small" rowSpan={3}>{jsonData[2][3][0]}</td>
                <td className="font-weight font-size-small" colSpan={4}>{jsonData[2][4][0]}</td>
                <td className="font-weight font-size-small" colSpan={4}>{jsonData[2][5][0]}</td>
                <td className="font-weight font-size-small text-top" rowSpan={3}>{jsonData[2][6][0]}</td>
              </tr>
              <tr>
                <td className="text-top font-weight font-size-small">{jsonData[3][0][0]}</td>
                <td className="text-top font-weight font-size-small">{jsonData[3][1][0]}</td>
                <td className="text-top font-weight font-size-small">{jsonData[3][2][0]}</td>
                <td className="text-top font-weight font-size-small">{jsonData[3][3][0]}</td>
                <td className="text-top font-weight font-size-small" rowSpan={2}>{jsonData[3][4][0]}</td>
                <td className="text-top font-weight font-size-small" rowSpan={2}>{jsonData[3][5][0]}</td>
                <td className="text-top font-weight font-size-small" rowSpan={2}>{jsonData[3][6][0]}</td>
                <td className="text-top font-weight font-size-small" rowSpan={2}>{jsonData[3][7][0]}</td>
              </tr>
              <tr>
                <td className='font-weight font-size-small'>{jsonData[4][0][0]}</td>
                <td className='font-weight font-size-small'>{jsonData[4][1][0]}</td>
                <td className='font-weight font-size-small'>{jsonData[4][2][0]}</td>
                <td className='font-weight font-size-small'>{jsonData[4][3][0]}</td>
              </tr>
              <tr>
                <td className="font-size-small">{jsonData[5][0][0]}</td>
                <td className="font-size-small">{jsonData[5][1][0]}</td>
                <td className="font-size-small">{jsonData[5][2][0]}</td>
                <td className="font-size-small">{jsonData[5][3][0]}</td>
                <td className="font-size-small">{jsonData[5][4][0]}</td>
                <td className="font-size-small">{jsonData[5][5][0]}</td>
                <td className="font-size-small">{jsonData[5][6][0]}</td>
                <td className="font-size-small">{jsonData[5][7][0]}</td>
                <td className="font-size-small">{jsonData[5][8][0]}</td>
                <td className="font-size-small">{jsonData[5][9][0]}</td>
                <td className="font-size-small">{jsonData[5][10][0]}</td>
                <td className="font-size-small">{jsonData[5][11][0]}</td>
                <td className="font-size-small">{jsonData[5][12][0]}</td>
                <td className="font-size-small">{jsonData[5][13][0]}</td>
              </tr>
              <tr>
                <td className="font-size-small">{jsonData[6][0][0]}</td>
                <td className="font-size-small">{jsonData[6][1][0]}</td>
                <td className="font-size-small">{jsonData[6][2][0]}</td>
                <td className="font-size-small">{jsonData[6][3][0]}</td>
                <td className="font-size-small">{jsonData[6][4][0]}</td>
                <td className="font-size-small">{jsonData[6][5][0]}</td>
                <td className="font-size-small">{jsonData[6][6][0]}</td>
                <td className="font-size-small">{jsonData[6][7][0]}</td>
                <td className="font-size-small">{jsonData[6][8][0]}</td>
                <td className="font-size-small">{jsonData[6][9][0]}</td>
                <td className="font-size-small">{jsonData[6][10][0]}</td>
                <td className="font-size-small">{jsonData[6][11][0]}</td>
                <td className="font-size-small">{jsonData[6][12][0]}</td>
                <td className="font-size-small">{jsonData[6][13][0]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}