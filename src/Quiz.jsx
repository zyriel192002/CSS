import React, { useState } from 'react'

// Fisher-Yates shuffle algorithm
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const questions = [
  {
    question: 'A utility tool that test whether a particular host is reachable across an IP network',
    options: ['Command Prompt', 'Ping', 'ipconfig', 'Network settings'],
    correct: 'Ping',
  },
  {
    question: '8 GB for 32-bit OS or 32 GB for 64-bit OS is the minimum requirement for hard disk drive capacity in Windows 10.',
    options: ['True', 'False'],
    correct: 'False (Actual minimum: 16 GB for 32-bit, 20 GB for 64-bit)',
  },
  {
    question: 'A network cable where one end is T568-A while the other is T568-B configuration',
    options: ['Cross-Over', 'Straight-Through', 'Coaxial Cable', 'Twisted Pair Cable'],
    correct: 'Cross-Over',
  },
  {
    question: 'F5 key is not appropriate to enter BIOS setup',
    options: ['True', 'False'],
    correct: 'True (Common keys: Del, F2, F10, Esc — rarely F5) ',
  },
  {
    question: 'ISO image is a complete copy of everything stored on a physical optical disc.',
    options: ['True', 'False'],
    correct: 'True',
  },
  {
    question: 'Wide Area Network (WAN) is a collection of devices connected together in one physical location',
    options: ['True', 'False'],
    correct: 'False (WAN covers large geographical areas)',
  },
  {
    question: 'The spider-like interconnection in millions of pieces of information located on computers around the cyber space.',
    options: ['World Wide Web', 'Local Area Network (LAN)', 'Spiderman', 'Router'],
    correct: 'World Wide Web',
  },
  {
    question: 'Flash memory is the type of memory used in the _____ as a storage',
    options: ['Solid-state Drive (SSD)', 'Hard Disk Drive (HDD)', 'Floppy Disk', 'CDROM'],
    correct: 'Solid-state Drive (SSD)',
  },
  {
    question: 'Consists of the user matrices and capability tables that govern the rights and privileges of users.',
    options: ['Access Control List', 'Mac Filtering', 'Remote Access', 'Virtual Cluster Server'],
    correct: 'Access Control List',
  },
  {
    question: 'Advanced Technology Attachment (ATA) and Serial Advanced Technology Attachment (SATA) are the two types of interface used to communicate between the hard drive and the computer motherboard.',
    options: ['True', 'False'],
    correct: 'True',
  },
  {
    question: 'A computer program used to prevent, detect, and remove possible threats to the system.',
    options: ['Application Software', 'Anti-virus Software', 'Python', 'Database Software'],
    correct: 'Anti-virus Software',
  },
  {
    question: 'Used to connect over a computer network',
    options: ['Network Interface Card', 'WIFI', 'Ethernet', 'World Wide Web'],
    correct: 'Network Interface Card',
  },
  {
    question: 'A networking device that forwards data packets between computer networks.',
    options: ['Switch', 'Router', 'Hub', 'LAN'],
    correct: 'Router',
  },
  {
    question: '+5V is the volt rating of the ____ wire in a power supply',
    options: ['Green', 'Black', 'Blue', 'Red'],
    correct: 'Red',
  },
  {
    question: 'Where the BIOS is stored in a standard PC.',
    options: ['RAM', 'ROM', 'HDD', 'SSD'],
    correct: 'ROM',
  },
  {
    question: 'Occurs when an attacker or trusted insider steals data from a computer system and demands compensation for its return.',
    options: ['Information Extortion', 'Hacker', 'Ransomware', 'Trojan'],
    correct: 'Information Extortion',
  },
  {
    question: 'Metropolitan Area Network (MAN) is a type of network that interconnects multiple local area network.',
    options: ['True', 'False'],
    correct: 'False',
  },
  {
    question: 'The common color for the USB 3.0 connector',
    options: ['Red', 'Green', 'Black', 'Blue'],
    correct: 'Blue',
  },
  {
    question: 'two or more PCs are connected and share resources without going through a separate server computer',
    options: ['WAN', 'LAN', 'Server to Client Network', 'Peer to Peer Network'],
    correct: 'Peer to Peer Network',
  },
  {
    question: 'Remote Computer is the start up recovery options in a computer that essentially boot into the RECOVERY partition of the main hard drive.',
    options: ['True', 'False'],
    correct: 'False (It is System Recovery / Recovery Environment, not "Remote Computer")  ',
  },
  {
    question: 'An automated software program that executes certain commands when it receives a specific input',
    correct: 'Automation Bot or Software Bot',
  },
  {
    question: 'Disc image also known as _____.',
    options: ['JPEG', 'ISO image', 'MP4', 'GIF'],
    correct: 'ISO image',
  },
  {
    question: 'Recovery Console Commands that writes a new master boot record on the hard disk drive',
    options: ['mbrfix', 'fixmbr'],
    correct: 'fixmbr',
  },
  {
    question: 'A computer network made up of an interconnection of local area networks (LANs) within a limited geographical area',
    options: ['Metropolitan Area Network', 'Local Area Network', 'Campus Area Network', 'Wide Area Network'],
    correct: 'Campus Area Network',
  },
  {
    question: 'In Server 2008, Local Area Network (LAN) connection icon in a yellow color indicator signifies ______.',
    options: ['Connected', 'No connectivity', 'Error'],
    correct: 'No connectivity',
  },
  {
    question: 'An application of network address translation (NAT) that redirects a communication request from one address and port number combination to another.',
    options: ['Port Forwarding', 'Wireless Fidelity', 'Network Administrator', 'Campus Area Network'],
    correct: 'Port Forwarding',
  },
  {
    question: 'Used to store the user documents with a large amount of memory and storage space.',
    options: ['Hard Disk Drive', 'Solid State Drive', 'USB Flash Drive', 'Optical Drive'],
    correct: 'Hard Disk Drive',
  },
  {
    question: 'Physically damaged cluster of storage on the hard drive',
    options: ['Bad Sector', 'Good Sector'],
    correct: 'Bad Sector',
  },
  {
    question: 'IP address conflict occurs when two or more devices connected with the same IP address in a computer network.',
    options: ['True', 'False'],
    correct: 'True',
  },
  {
    question: 'Alternative for wired connection that uses radio frequencies to send signals between devices and a router.',
    options: ['Network Administrator', 'Wireless Fidelity', 'File System Quota', 'IP address conflict'],
    correct: 'Wireless Fidelity',
  },
  {
    question: 'Light Emitting Diode (LED) in Network Interface Card (NIC) has ___ lights.',
    options: ['1', '2', '3', '4'],
    correct: '2 (One for Link, one for Activity)',
  },
  {
    question: 'A software program stored into a Read Only Memory (ROM).',
    options: ['Malware', 'Firmware', 'Virus'],
    correct: 'Firmware',
  },
  {
    question: 'A storage device that should be replace if frequent error messages appear while moving files and booting up operating system.',
    correct: 'Hard Disk Drive or Solid State Drive',
  },
  {
    question: 'File System Quota enables administrators to configure storage thresholds on particular of data stored on server NTFS volumes.',
    options: ['True', 'False'],
    correct: 'True',
  },
  {
    question: 'A Windows update that downloads and installs latest version.',
    options: ['Manual', 'Fully automatic', 'Semi automatic'],
    correct: 'Fully automatic',
  },
  {
    question: 'Failover is a feature in Windows Server provides the ability to migrate workloads between a source and target cluster.',
    options: ['True', 'False'],
    correct: 'True',
  },
  {
    question: 'A compound used to prevent overheating of CPU.',
    options: ['Grease', 'Thermal Paste', 'Toothpaste', 'Vaseline'],
    correct: 'Thermal Paste',
  },
  {
    question: '+12V is the volt rating of the YELLOW wire in a power supply',
    options: ['True', 'False'],
    correct: 'True',
  },
  {
    question: 'the maximum cable length for USB2.0',
    options: ['8 meters', '10 meters', '5 meters', '3 meters'],
    correct: '5 meters',
  },
  {
    question: 'It is the term applies to the interconnection of LAN in a city into 5 to 50 kilometers.',
    options: ['Campus Area Network', 'Local Area Network', 'Metropolitan Area Network', 'Wide Area Network'],
    correct: 'Metropolitan Area Network',
  },
  {
    question: 'Allows users to move around the coverage area in a line of sight while maintaining a network connection.',
    options: ['Wireless Local Area Network', 'Wireless Personal Area Network', 'Metropolitan Area Network', 'Campus Area Network'],
    correct: 'Wireless Local Area Network',
  },
  {
    question: 'A network interface controller is also known as ____.',
    correct: 'Network Interface Card (NIC)',
  },
  {
    question: 'NetBackup is an enterprise-level heterogeneous backup and recovery suite.',
    options: ['True', 'False'],
    correct: 'True',
  },
  {
    question: 'Windows edition that has a program capable of restricting other users to access certain programs in a computer.',
    options: ['Windows XP', 'Windows Ultimate', 'Windows 10', 'Windows 11'],
    correct: 'Windows Ultimate',
  },
  {
    question: 'Used to gain unauthorized access to computers wherein the intruder sends messages with a source IP address.',
    options: ['Circular Logging', 'Spooling', 'File Screening', 'Nslookup'],
    correct: 'Spooling or IP Spoofing',
  },
  {
    question: 'Is the Class of IP address of 192.168.0.1.',
    options: ['Class A', 'Class B', 'Class C', 'Class D'],
    correct: 'Class C',
  },
  {
    question: 'Is the network security standard that tries to make connections between a router and wireless devices faster and easier',
    correct: 'WPS (Wi-Fi Protected Setup)',
  },
  {
    question: 'Conserves disk space by ensuring that the performance log file will not continue growing over certain limits.',
    options: ['Circular Logging', 'File Screening', 'Nslookup', 'Spooling'],
    correct: 'Circular Logging',
  },
  {
    question: 'Allows to define a list of devices and only allow those devices on Wi-Fi network.',
    correct: 'MAC Filtering',
  },
  {
    question: 'Problem of a computer if the time and date keeps on resetting even after fixing in the BIOS',
    options: ['Hard disk', 'CMOS battery failure', 'RAM', 'GPU'],
    correct: 'CMOS battery failure',
  },
  {
    question: 'Loss is an information asset suffering damage, unintended modification or disclosure.',
    options: ['True', 'False'],
    correct: 'True',
  },
  {
    question: 'A type of network that connects through signals ( e.g. infrared)',
    options: ['Wireless Local Area Network', 'Wireless Personal Area Network', 'Metropolitan Area Network', 'Campus Area Network'],
    correct: 'Wireless Personal Area Network',
  },
  {
    question: 'Process of scanning, identifying, diagnosing and resolving problems, errors and bugs in software.',
    options: ['Circular Logging', 'NetBackup', 'Network Load Balancing', 'Software troubleshooting'],
    correct: 'Software troubleshooting',
  },
  {
    question: 'Ethernet cable used to connect computers to hubs & switches.',
    options: ['UTP cable', 'Straight Through', 'Cross over cable'],
    correct: 'Straight Through',
  },
  {
    question: 'System32 is where the folder that the device driver can be found.',
    options: ['True', 'False'],
    correct: 'True',
  },
  {
    question: 'The maximum cable length for USB 3.0 using a non-twisted pair wire.',
    options: ['2 meters', '4 meters', '1 meters', '3 meters'],
    correct: '3 meters',
  },
  {
    question: 'Minimum byte capacity of a bootable flash drive for Windows 10 is 16GB.',
    options: ['True', 'False'],
    correct: 'False (Minimum is 8GB)',
  },
  {
    question: 'Class B IP Address',
    options: ['172.168.10.1', '192.168.0.2', '10.10.10.2', '192.168.1.1'],
    correct: '172.168.10.1 (Class B range: 128.0.0.0 – 191.255.255.255)',
  },
  {
    question: 'Type of peripheral card having media access control address',
    options: ['LAN Card', 'Vertical Cross-Connect', 'WiFi', 'Network Interface Card'],
    correct: 'Network Interface Card',
  },
  {
    question: 'Resistance reading of an open wire is Infinite ohm',
    options: ['True', 'False'],
    correct: 'True',
  },
  {
    question: 'Minimum RAM requirement of Server2012 R2',
    options: ['512MB', '1024MB', '256MB', '2048MB'],
    correct: '512MB',
  },
  {
    question: 'USB stands for ___.',
    options: ['Universal Serial Bus'],
    correct: 'Universal Serial Bus',
  },
  {
    question: 'A network security system that monitors act controls incoming and outgoing network traffic',
    options: ['Firewall', 'Authentication', 'Access', 'Edge'],
    correct: 'Firewall',
  },
  {
    question: 'Error is the term used to refer when a system is unavailable.',
    options: ['True', 'False'],
    correct: 'False',
  },
  {
    question: '______ is the option in the BIOS/UEFI used to overclock computer',
    options: ['Voltage Basic Input Output System (BIOS)', 'Ctrl+Alt+Del', 'Settings', 'Boot'],
    correct: 'Voltage Basic Input Output System (BIOS)',
  },
  {
    question: 'A type of a high-speed network/subnetwork that composed of hosts anal interconnects using a variety of technology/topology',
    options: ['Storage Area Network', 'Wide Area Network', 'Lightweight Directory Access Protocol (LDAP)', 'Loopback test'],
    correct: 'Storage Area Network',
  },
  {
    question: 'An enclosed or semi-enclosed channel that protects, routes and hides cables and wires',
    options: ['Raceway', 'Patch Panel', 'Application Sewer', 'Storage Area Network'],
    correct: 'Raceway',
  },
  {
    question: 'Process of recognizing a user\'s identity',
    options: ['Authentication', 'Verification', 'Security', 'Firewall'],
    correct: 'Authentication',
  },
  {
    question: 'Loopback test verifies the operation of communication device by sending and receiving data from the same port',
    options: ['True', 'False'],
    correct: 'True',
  },
  {
    question: 'A type of sewer that occupies a large portion of computing territory between the database server and end user',
    options: ['Application Sewer', 'Bandwith', 'Edge', 'Storage Area Network'],
    correct: 'Application Sewer',
  },
  {
    question: 'Active directory protocol used to access data from a database',
    options: ['Lightweight Directory Access Protocol', 'Domain Network Services', 'Wireless Access Protocol', 'UPNP'],
    correct: 'Lightweight Directory Access Protocol',
  },
  {
    question: 'In networking, Connection refers to pieces of related information that are transferred through a network.',
    options: ['True', 'False'],
    correct: 'True',
  },
  {
    question: 'In the context of security, Authentication is a privilege or assigned permission for the use of computer data or resources',
    options: ['True', 'False'],
    correct: 'False (This describes Authorization, not Authentication.) ',
  },
  {
    question: 'Used to certify the peer name resolution in Active Directory',
    correct: 'Domain Name System (DNS)',
  },
  {
    question: 'Acts like a border router to connect corporate sites to wired access fines',
    options: ['Customer Premises Equipment (CPE)', 'Application Sewer', 'Voltage Basic Input Output System (BIOS)', 'Chipset'],
    correct: 'Customer Premises Equipment (CPE)',
  },
  {
    question: 'A networking tool that monitors and intercepts traffic over the computer network.',
    options: ['Packet Analyzer', 'LAN Tester', 'Network Interface Card', 'View Current Activity'],
    correct: 'Packet Analyzer',
  },
  {
    question: 'It means pushing component to its limits and extremes.',
    options: ['Stress Test', 'Hardware Test', 'Testing', 'Netstat'],
    correct: 'Stress Test',
  },
  {
    question: 'Class A is a class of IP addressing is 10.10.10.1.',
    options: ['True', 'False'],
    correct: 'True ( (Class A range: 1.0.0.0 – 126.255.255.255)',
  },
  {
    question: 'The traditional method used to access server data and using the server message block protocol over TCP/IP.',
    options: ['Windows Folder Sharing', 'Network Sharing', 'Windows Sharing Folder', 'Network Folder Sharing'],
    correct: 'Windows Folder Sharing',
  },
  {
    question: 'An interface standard for a serial bus for high-speed communications also referred as Institute of Electrical and Electronics Engineers (IEEE) 1394 interface.',
    options: ['FireWire', 'FireWall', 'Universal Serial Bus (USB)', 'Input/Output Controller Hub'],
    correct: 'FireWire',
  },
  {
    question: 'Recovery tool in Windows fixes and scans computer problem that prevents computer from booting repeatedly.',
    options: ['Startup Repair', 'Windows Recovery', 'Local Backup', 'Communications Protocol'],
    correct: 'Startup Repair',
  },
  {
    question: 'measured when performing continuity testing of twisted pair cable.',
    options: ['Resistance', 'Capacitor', 'Resistant', 'Latency'],
    correct: 'Resistance',
  },
  {
    question: 'A node in a computer network that allows data to flow from one discrete network to another.',
    options: ['Gateway', 'Latency', 'Netstat', 'Terminal Server'],
    correct: 'Gateway',
  },
  {
    question: 'The time lapse between data sent and when received, it can have a big impact on performance',
    options: ['Timelapse', 'Latency', 'Resistance', 'Time Lag'],
    correct: 'Latency',
  },
  {
    question: 'Minimum RAM requirement of Server2008 R2',
    options: ['512MB', '1024MB', '256MB', '2048MB'],
    correct: '512MB',
  },
  {
    question: '255 devices can connect to a wireless router',
    options: ['True', 'False'],
    correct: 'False (254 devices can connect)',
  },
  {
    question: 'Authentication ensures that information and programs ore changing only in a specified and authorized manner.',
    options: ['True', 'False'],
    correct: 'False (This describes Integrity, not Authentication.) ',
  },
  {
    question: 'Capacitor needs to discharge electrically before the replacement of parts.',
    options: ['True', 'False'],
    correct: 'True',
  },
  {
    question: 'A microchip to manage data communication between a CPU and a motherboard.',
    options: ['Input/Output Controller Hub', 'Chipset', 'LoJack', 'Capacitor'],
    correct: 'Chipset',
  },
  {
    question: 'The process of joining two cable ends together.',
    options: ['Cable Splicing', 'Cable Connecting', 'Cable Splitting', 'Cable Slicing'],
    correct: 'Cable Splicing',
  },
  {
    question: 'A logical subnetwork that groups collection of devices from the same network switch.',
    options: ['Virtual Local Area Network', 'Local Area Network', 'Wide Area Network', 'Campus Area Network'],
    correct: 'Virtual Local Area Network',
  },
  {
    question: 'Diskport is a text based command used for creating bootable flash drive.',
    options: ['True', 'False'],
    correct: 'False (It is "diskpart", not "Diskport"),',
  },
  {
    question: 'HTTP means',
    options: ['Hypertext Transfer Protocol', 'Hypertexts Transmit Protocol', 'Hypertext Transfer Procedure', 'Hyper Transfer Text Protocol'],
    correct: 'Hypertext Transfer Protocol',
  },
  {
    question: '____ is a volt meter reading of a shorted diode.',
    options: ['Zero volt', 'One volt', 'Two volt', 'Four volt'],
    correct: 'Zero volt',
  },
  {
    question: 'A backup used in hard drive, disc, flash drive and external drive that are housed on site.',
    options: ['Local Backup', 'Server Backup', 'Windows Backup', 'Backup'],
    correct: 'Local Backup',
  },
  {
    question: 'Malicious code includes the execution of viruses, worms, Trojan horses and active Web scripts with the intent to destroy or steal information',
    options: ['True', 'False'],
    correct: 'True',
  },

]

export default function Quiz() {
  const [started, setStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [revealed, setRevealed] = useState({})
  const [shuffledQuestions, setShuffledQuestions] = useState([])

  function nextQuestion() {
    const total = shuffledQuestions.length || questions.length
    if (currentIndex < total - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function prevQuestion() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  function startQuiz() {
    const shuffled = shuffle(questions)
    setShuffledQuestions(shuffled)
    setStarted(true)
  }



  function revealAnswer() {
    setRevealed(prev => ({ ...prev, [currentIndex]: true }))
  }

  const currentQuestion = shuffledQuestions[currentIndex] || questions[currentIndex]

  function getQuestionTypeLabel(type, index) {
    const q = shuffledQuestions[index] || questions[index]
    if (!q.options) return 'Identification'
    if (q.options.length === 2) return 'True or False'
    return 'Multiple Choice'
  }


  if (!started) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white text-black rounded-lg shadow-lg p-16 flex flex-col items-center justify-center min-h-[500px] border border-gray-200">
          <div className="text-7xl mb-8">🎯</div>
          <h1 className="text-5xl font-bold mb-8 text-gray-900 text-center">
            Handa na ba kayo?!
          </h1>
          <p className="text-xl text-gray-700 mb-12 text-center max-w-2xl leading-relaxed">
            Test your knowledge with our exciting networking quiz challenge!
          </p>
          <button
            onClick={startQuiz}
            className="px-10 py-4 text-2xl font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            🚀 Oo naman!
          </button>
        </div>
      </div>
    )
  }





  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white text-black rounded-lg shadow-lg p-12 border border-gray-200">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🧠</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Reviewer for the Exam
          </h1>
          <div className="inline-block bg-blue-50 px-6 py-2 rounded-lg border border-blue-200">
            <span className="text-lg font-medium text-blue-800">
              {getQuestionTypeLabel(currentQuestion.type, currentIndex)}
            </span>
          </div>
        </div>

        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-4 bg-gray-50 px-8 py-4 rounded-lg border border-gray-200">
            <div className="text-3xl">📊</div>
            <h2 className="font-semibold text-2xl text-gray-800">{`Question ${currentIndex + 1} of ${
              shuffledQuestions.length || questions.length
            }`}</h2>
          </div>
        </div>

        <div className="mb-12 bg-gray-50 p-8 rounded-lg border border-gray-200">
          <div className="text-2xl font-medium text-center text-gray-900 leading-relaxed">
            {currentQuestion.question}
          </div>
        </div>

        {currentQuestion.options && (
          <div className="mb-8">
            <div className="grid gap-4 max-w-3xl mx-auto">
              {currentQuestion.options.map((option, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xl font-medium text-gray-800">{option}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {!revealed[currentIndex] && (
          <div className="mb-8 text-center">
            <button
              onClick={revealAnswer}
              className="px-8 py-4 text-xl font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Show Answer
            </button>
          </div>
        )}

        {revealed[currentIndex] && (
          <div className="mb-8 text-center">
            <div className="bg-green-50 border border-green-300 p-6 rounded-lg inline-block">
              <span className="text-xl font-semibold text-green-800">Correct Answer: {currentQuestion.correct}</span>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center gap-6">
          <button
            onClick={prevQuestion}
            disabled={currentIndex === 0}
            className="flex-1 px-8 py-4 text-xl font-semibold bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 disabled:transform-none"
          >
            ⬅️ Previous
          </button>
          <button
            onClick={nextQuestion}
            className="flex-1 px-8 py-4 text-xl font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Next ➡️
          </button>
        </div>
      </div>
    </div>
  )
}
