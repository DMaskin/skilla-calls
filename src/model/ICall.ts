export interface ICall {
  id: number
  partnership_id: string
  partner_data: {
    id: string
    name: string
    phone: string
  }
  date: string
  date_notime: string
  time: 0
  from_number: string
  from_extension: string
  to_number: string
  to_extension: string
  is_skilla: number
  status: string
  record: string
  line_number: string
  in_out: boolean
  from_site: number
  source: string
  errors: string[]
  disconnect_reason: string
  results: []
  stages: [
    {
      person_name: string
      person_surname: string
      person_mango_phone: string
      duration: string
      disconnect_reason: string
    }
  ]
  abuse: []
  contact_name: string
  contact_company: string
  person_id: 4730
  person_name: string
  person_surname: string
  person_avatar: string
}
